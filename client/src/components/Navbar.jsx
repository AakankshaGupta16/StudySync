import React from 'react';

const Navbar = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="text-xl font-bold text-indigo-600 cursor-pointer"
      >
        StudySync
      </div>

      <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
        <li onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-indigo-500 cursor-pointer">
          Home
        </li>
        <li onClick={() => scrollToSection('features')} className="hover:text-indigo-500 cursor-pointer">
          Features
        </li>
        <li onClick={() => scrollToSection('contact')} className="hover:text-indigo-500 cursor-pointer">
          Contact
        </li>
      </ul>

      <button className="md:hidden text-indigo-600 text-2xl">
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
