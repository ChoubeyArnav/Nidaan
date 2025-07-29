import React, { createContext, useState, useEffect } from "react";
import api from "./api/axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkSession = async () => {
      const localUser = localStorage.getItem("user");
      if (!localUser) return; // No need to check session, just skip

      try {
        const res = await api.get("/users/current-user");
        setUser(res.data.data);
        localStorage.setItem("user", JSON.stringify(res.data.data));
      } catch (err) {
        setUser(null);
        localStorage.removeItem("user");
      }
    };

    checkSession();
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = async () => {
    try {
      await api.post("/users/logout"); // Notify backend
    } catch (err) {
      console.error("Logout failed", err);
    }

    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
