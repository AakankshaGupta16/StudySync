import React from "react";

const Sidebar = ({ setMode, mode, isHovered }) => {
  const moods = [
    { name: "Focus", value: "focus" },
    { name: "Night Owl", value: "nightowl" },
  ];

  const bgColor = {
    focus: "bg-green-300/40",  // Light green for focus mode
    nightowl: "bg-gray-800/40", // Grey for night owl mode
  };

  return (
    <div
      className={`h-full p-4 transition-all duration-300 backdrop-blur-md ${bgColor[mode]}`}
    >
      {/* Heading */}
      <h2
        className={`text-white font-bold text-xl mb-4 font-mono transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        Moods
      </h2>

      {/* Mood Buttons */}
      <ul className="space-y-3">
        {moods.map((m) => (
          <li
            key={m.value}
            onClick={() => setMode(m.value)}
            className={`cursor-pointer rounded-lg px-4 py-2 transition-all duration-300 text-white hover:bg-white/20 ${
              isHovered ? "opacity-100" : "opacity-0"
            } ${mode === m.value ? "bg-white/20 font-bold" : ""}`}
          >
            {m.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
