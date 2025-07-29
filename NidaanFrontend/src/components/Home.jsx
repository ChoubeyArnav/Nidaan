import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import MentorsGrid from "./MentorsGrid";
import Header from "./Header";

const Home = () => {
  const { user } = useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState("");
  const currentUser = user?.data?.user;
  console.log("Current user object:", currentUser);
  console.log("Current role:", currentUser?.role);

  if (currentUser?.role === "mentor") {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-10">
          <h1 className="text-4xl font-bold text-green-700 dark:text-green-400 mb-6">
            Welcome back, Mentor {currentUser.name} 👋
          </h1>

          {/* My Students */}
          <div className="mb-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Your Students</h2>
            <p className="mb-4">
              Check who’s connected with you and guide them wisely.
            </p>
            <Link to="/dashboard">
              <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded font-medium">
                Go to My Students
              </button>
            </Link>
          </div>

          {/* Schedule Sessions */}
          <div className="mb-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Schedule Sessions</h2>
            <p className="mb-4">
              Manage your upcoming mentoring sessions and availability.
            </p>
            <Link to="/schedule-session">
              <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded font-medium">
                Schedule Now
              </button>
            </Link>
          </div>

          {/* Update Profile/Add Skills */}
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-2">
              Update Profile & Skills
            </h2>
            <p className="mb-4">
              Keep your info fresh. Let students know what you’re best at.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/update-profile">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded font-medium">
                  Update Profile
                </button>
              </Link>
              <Link to="/add-skill">
                <button className="bg-purple-500 hover:bg-purple-600 text-white px-5 py-2 rounded font-medium">
                  Add Skills
                </button>
              </Link>
            </div>
          </div>
        </main>
      </>
    );
  }

  if (currentUser?.role === "user") {
    return (
      <>
        <Header setSearchQuery={setSearchQuery} />
        <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-10">
          <h1 className="text-3xl font-semibold mb-4 text-green-700 dark:text-green-400">
            Welcome back, {currentUser.name}! 🌱
          </h1>
          <p className="text-md text-gray-600 dark:text-gray-400 italic mb-8">
            🚀 “Learning never exhausts the mind.” – Leonardo da Vinci
          </p>

          {/* 🔍 Search Mentors */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search mentors..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-green-500 dark:bg-gray-800 dark:text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* 👨‍🏫 Mentor List */}
          <MentorsGrid searchQuery={searchQuery} />

          {/* 📅 Upcoming + History Sessions */}
          <div className="mt-12 p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Your Sessions</h2>
            <p className="mb-4">
              Track and manage all your mentoring sessions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/upcoming-sessions">
                <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded font-medium">
                  Upcoming Sessions
                </button>
              </Link>
              <Link to="/session-history">
                <button className="bg-gray-700 hover:bg-gray-800 text-white px-5 py-2 rounded font-medium">
                  Session History
                </button>
              </Link>
            </div>
          </div>

          {/* 👤 Update Profile */}
          <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Update Your Profile</h2>
            <p className="mb-4">
              Make sure your profile reflects your latest interests and goals.
            </p>
            <Link to="/update-profile">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded font-medium">
                Update Profile
              </button>
            </Link>
          </div>
        </main>
      </>
    );
  }

  // Not Logged In — Default Landing
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white w-full">
      <section className="bg-gray-100 dark:bg-gray-800 w-full py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-green-700 dark:text-green-400">
          Welcome to Nidaan
        </h1>
        <p className="text-lg sm:text-xl max-w-4xl mx-auto text-gray-600 dark:text-gray-300">
          A smart platform to connect mentors and mentees. Whether you're here
          to guide or grow, <strong>Nidaan</strong> is your bridge to clarity.
        </p>
      </section>

      <section className="bg-white dark:bg-gray-900 w-full py-14 text-center border-t border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
          Already registered?
        </h2>
        <p className="mb-5 text-gray-600 dark:text-gray-300">
          Continue your journey of growth and learning.
        </p>
        <Link to="/login">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-medium">
            Login
          </button>
        </Link>
      </section>

      <section className="bg-gray-50 dark:bg-gray-800 w-full py-14 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
          Are you a Mentor?
        </h2>
        <p className="mb-5 text-gray-700 dark:text-gray-300">
          Share your experience. Inspire someone’s journey. Be the reason behind
          someone’s clarity.
        </p>
        <Link to="/register">
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded font-medium">
            Join as Mentor
          </button>
        </Link>
      </section>

      <section className="bg-white dark:bg-gray-900 w-full py-14 text-center border-t border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
          Are you a Mentee?
        </h2>
        <p className="mb-5 text-gray-600 dark:text-gray-300">
          Confused about your path? Don’t worry — we have mentors who’ve walked
          it already.
        </p>
        <Link to="/register">
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded font-medium">
            Sign Up as Mentee
          </button>
        </Link>
      </section>
    </main>
  );
};

export default Home;
