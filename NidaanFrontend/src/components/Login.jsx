import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import api from '../api/axios';

const Login = () => {
  const [input, setInput] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await api.post('users/login', {
        email: input,
        username: input,
        password,
      });

      login(response.data);
      navigate('/');
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-green-600 dark:text-green-400 text-center mb-6">
          Welcome back to Nidaan
        </h2>

        {error && (
          <div className="mb-4 text-red-500 text-center text-sm">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email or Username
            </label>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded font-medium transition"
          >
            Login
          </button>
        </form>

        <div className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
          Don&apos;t have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-green-600 hover:underline font-medium"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
