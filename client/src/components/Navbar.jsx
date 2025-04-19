import React from "react";

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 p-4">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-extrabold tracking-wide">StudySync</div>
        <div>
          <a
            href="#home"
            className="text-white px-4 py-2 hover:bg-indigo-500 rounded transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#features"
            className="text-white px-4 py-2 hover:bg-indigo-500 rounded transition-colors duration-300"
          >
            Features
          </a>
          <a
            href="#contact"
            className="text-white px-4 py-2 hover:bg-indigo-500 rounded transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
