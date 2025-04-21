import React, { useState, useEffect } from 'react';

const Sidebar = ({ setMode, mode }) => {
  const [isHovered, setIsHovered] = useState(false);

  const moods = [
    { name: 'Focus', value: 'focus' },
    { name: 'Night Owl', value: 'nightowl' },
  ];

  // Background and text styles for each mode
  const getBackgroundStyle = () => {
    switch (mode) {
      case 'nightowl':
        return {
          background: 'from-gray-900 via-gray-800 to-black',
          textColor: 'text-white',
          backdrop: 'backdrop-blur-md',
        };
      case 'focus':
      default:
        return {
          background: 'from-green-100 to-emerald-200',
          textColor: 'text-emerald-900',
          backdrop: 'backdrop-blur-sm',
        };
    }
  };

  const [backgroundStyle, setBackgroundStyle] = useState(getBackgroundStyle());

  useEffect(() => {
    const timer = setTimeout(() => {
      setBackgroundStyle(getBackgroundStyle());
    }, 200); // Delay helps avoid visual flickers

    return () => clearTimeout(timer);
  }, [mode]);

  return (
    <div
      className={`absolute top-0 left-0 z-10 h-full p-6 bg-gradient-to-b ${backgroundStyle.background} ${backgroundStyle.backdrop} transition-all duration-700 ease-in-out transform ${
        isHovered ? 'w-64' : 'w-20'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Sidebar Title */}
      <h2
        className={`text-3xl font-bold mb-6 font-mono transition-all duration-700 ${
          backgroundStyle.textColor
        } ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      >
        Moods
      </h2>

      {/* Mood List */}
      <ul className="space-y-4">
        {moods.map((m) => (
          <li
            key={m.value}
            onClick={() => setMode(m.value)}
            className={`cursor-pointer hover:bg-white/20 px-4 py-2 rounded-xl transition-all duration-700 text-lg font-semibold ${
              backgroundStyle.textColor
            } ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          >
            {m.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
