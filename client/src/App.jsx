import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import SelfStudy from './pages/Selfstudy'; // ✅ New import

const Home = () => (
  <div className="min-h-screen bg-indigo-600 text-white">
    <Navbar />
    <Hero />

    <main className="p-8">
      <section id="features" className="mb-12 bg-white/10 backdrop-blur-md shadow-lg rounded-lg p-6">
        <h2 className="text-4xl font-semibold text-center text-white-300 mb-6">Features</h2>
        <ul className="list-disc ml-6 text-lg space-y-3 text-white">
          <li className="hover:text-yellow-400 transition-colors duration-300">Group Scheduling</li>
          <li className="hover:text-yellow-400 transition-colors duration-300">Live Chat</li>
          <li className="hover:text-yellow-400 transition-colors duration-300">Task Prioritization</li>
          <li className="hover:text-yellow-400 transition-colors duration-300">AI Task Suggestions</li>
          <li className="hover:text-yellow-400 transition-colors duration-300">Pomodoro Timer</li>
        </ul>
      </section>

      <section id="contact" className="mb-12 bg-white/10 backdrop-blur-md text-white p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-semibold text-center mb-6">Contact Us</h2>
        <p className="text-lg text-center">
          We would love to hear from you! Get in touch for more information or inquiries.
        </p>
      </section>
    </main>

    <footer className="bg-black/40 p-4 text-white text-center">
      &copy; 2025 StudySync. All rights reserved.
    </footer>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/self-study" element={<SelfStudy />} /> {/* ✅ New route */}
      </Routes>
    </Router>
  );
};

export default App;
