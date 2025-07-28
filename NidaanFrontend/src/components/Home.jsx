// import React, { useState } from 'react';
// import MentorsGrid from './MentorsGrid';
// import Header from './Header';

// const Home = () => {
//   const [searchQuery, setSearchQuery] = useState('');

//   return (
//     <>
//       {/* <Header setSearchQuery={setSearchQuery} />
//       <div className> 
//         <MentorsGrid searchQuery={searchQuery} />
//       </div> */}

//     </>
//   );
// };

// export default Home;
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white w-full">
      
      {/* 🧠 Hero Section */}
      <section className="bg-gray-100 dark:bg-gray-800 w-full py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-green-700 dark:text-green-400">
          Welcome to Nidaan
        </h1>
        <p className="text-lg sm:text-xl max-w-4xl mx-auto text-gray-600 dark:text-gray-300">
          A smart platform to connect mentors and mentees. Whether you're here to guide or grow, <strong>Nidaan</strong> is the bridge to meaningful mentorship.
        </p>
      </section>

      {/* 🔐 Already Registered Section */}
      <section className="bg-white dark:bg-gray-900 w-full py-14 text-center border-t border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-3">Already registered?</h2>
        <p className="mb-5 text-gray-600 dark:text-gray-300">
          Continue your journey of growth and learning.
        </p>
        <Link to="/login">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-medium">
            Login
          </button>
        </Link>
      </section>

      {/* 🎓 Mentor Invitation */}
      <section className="bg-gray-50 dark:bg-gray-800 w-full py-14 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-3">Are you a Mentor?</h2>
        <p className="mb-5 text-gray-700 dark:text-gray-300">
          Share your experience. Inspire someone’s journey. Be the reason behind someone’s clarity.
        </p>
        <Link to="/register">
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded font-medium">
            Join as Mentor
          </button>
        </Link>
      </section>

      {/* 👨‍🎓 Mentee Invitation */}
      <section className="bg-white dark:bg-gray-900 w-full py-14 text-center border-t border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-3">Are you a Mentee?</h2>
        <p className="mb-5 text-gray-600 dark:text-gray-300">
          Confused about your path? Don’t worry — we have mentors who’ve walked it already.
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
