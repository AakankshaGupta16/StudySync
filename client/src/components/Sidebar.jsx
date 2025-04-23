import React from "react";

const Sidebar = ({ setMode, mode, isHovered }) => {
  const moods = [
    { name: "Focus", value: "focus" },
    { name: "Night Owl", value: "nightowl" },
    { name: "Chill", value: "chill" },
    { name: "Grind", value: "grind" },
  ];

  const bgColor = {
    focus: "bg-green-300/40",
    nightowl: "bg-gray-800/40",
    chill: "bg-yellow-200/40",
    grind: "bg-purple-300/40",
  };

  return (
    <div
      className={`h-full p-4 transition-all duration-300 backdrop-blur-md ${bgColor[mode]}`}
    >
      <h2
        className={`text-white font-bold text-xl mb-4 font-mono transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        Moods
      </h2>

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
