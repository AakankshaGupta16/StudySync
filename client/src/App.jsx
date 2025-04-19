import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="min-h-screen bg-red-600 text-white">
      <div className="absolute top-0 left-0 w-full h-full bg-blue-500 z-[5]"></div> 
      
      <Navbar />
      <Hero />

      <main className="p-8">
        {/* Features Section */}
        <section id="features" className="mb-12 bg-white/10 backdrop-blur-md shadow-lg rounded-lg p-6">
          <h2 className="text-4xl font-semibold text-center text-yellow-300 mb-6">
            Features
          </h2>
          <ul className="list-disc ml-6 text-lg space-y-3 text-white">
            <li className="hover:text-yellow-400 transition-colors duration-300">
              Group Scheduling
            </li>
            <li className="hover:text-yellow-400 transition-colors duration-300">
              Live Chat
            </li>
            <li className="hover:text-yellow-400 transition-colors duration-300">
              Task Prioritization
            </li>
            <li className="hover:text-yellow-400 transition-colors duration-300">
              AI Task Suggestions
            </li>
            <li className="hover:text-yellow-400 transition-colors duration-300">
              Pomodoro Timer
            </li>
          </ul>
        </section>

        {/* Contact Section */}
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
};

export default App;
