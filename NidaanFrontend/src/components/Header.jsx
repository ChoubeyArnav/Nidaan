import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import NotificationsDropdown from "./NotificationsDropdown";
import { MessageCircle } from "lucide-react";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setShowMenu(false);
  }, [location.pathname]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-3 flex justify-between items-center fixed top-0 left-0 right-0 z-50 w-full">
      <span
        className="text-2xl font-bold text-green-600 cursor-pointer"
        onClick={() => navigate("/")}
      >
        Nidaan
      </span>

      <div className="relative flex items-center gap-4" ref={dropdownRef}>
        {user && (
          <>
            <NotificationsDropdown />
            <div
              className="cursor-pointer"
              onClick={() => navigate("/chat")}
              title="Chat"
            >
              <MessageCircle className="text-gray-700 dark:text-gray-300 w-6 h-6" />
            </div>
          </>
        )}

        {!user ? (
          <div className="hidden sm:flex gap-3 items-center">
            <Link
              to="/login"
              className="text-green-600 border border-green-600 px-4 py-2 rounded-full font-medium transition hover:bg-green-600 hover:text-white text-sm sm:text-base"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-green-500 text-white px-4 py-2 rounded-full font-medium hover:bg-green-600 text-sm sm:text-base"
            >
              Signup
            </Link>
          </div>
        ) : (
          <>
            <img
              src={user.data.user.avatar || "/default-avatar.png"}
              alt="avatar"
              className="w-10 h-10 rounded-full object-cover cursor-pointer border border-gray-300"
              onClick={() => setShowMenu((prev) => !prev)}
            />
            {showMenu && (
              <div className="absolute right-0 top-full mt-2 w-64 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl z-50 overflow-hidden">
                <div className="flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
                  <Link
                    to="/profile"
                    className="px-5 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition text-sm font-medium text-gray-800 dark:text-gray-200"
                  >
                    View Profile
                  </Link>
                  <Link
                    to="/update-profile"
                    className="px-5 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition text-sm font-medium text-gray-800 dark:text-gray-200"
                  >
                    Update Profile
                  </Link>
                  <Link
                    to="/change-password"
                    className="px-5 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition text-sm font-medium text-gray-800 dark:text-gray-200"
                  >
                    Change Password
                  </Link>

                  {user.data.user.role === "mentor" && (
                    <>
                      <Link
                        to="/add-skill"
                        className="px-5 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition text-sm font-medium text-gray-800 dark:text-gray-200"
                      >
                        Add Skill
                      </Link>
                      <Link
                        to="/dashboard"
                        className="px-5 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition text-sm font-medium text-gray-800 dark:text-gray-200"
                      >
                        My Students
                      </Link>
                      <Link
                        to="/schedule-session"
                        className="px-5 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition text-sm font-medium text-gray-800 dark:text-gray-200"
                      >
                        Schedule Sessions
                      </Link>
                    </>
                  )}

                  {user.data.user.role === "user" && (
                    <Link
                      to="/dashboard"
                      className="px-5 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition text-sm font-medium text-gray-800 dark:text-gray-200"
                    >
                      My Mentors
                    </Link>
                  )}

                  <Link
                    to="/upcoming-sessions"
                    className="px-5 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition text-sm font-medium text-gray-800 dark:text-gray-200"
                  >
                    Upcoming Sessions
                  </Link>
                  <Link
                    to="/session-history"
                    className="px-5 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition text-sm font-medium text-gray-800 dark:text-gray-200"
                  >
                    Session History
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="px-5 py-3 text-left text-red-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition text-sm font-medium"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
