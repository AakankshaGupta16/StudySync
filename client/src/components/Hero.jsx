import React from "react";

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-4 tracking-wide">
          Welcome to <span className="text-yellow-400">StudySync</span>
        </h1>
        <p className="text-xl mb-6">
          Your collaborative study planner made easy. Manage tasks, set priorities, and boost productivity!
        </p>
        <a
          href="#features"
          className="bg-yellow-400 text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition duration-300"
        >
          Explore Features
        </a>
      </div>
    </section>
  );
};

export default Hero;
