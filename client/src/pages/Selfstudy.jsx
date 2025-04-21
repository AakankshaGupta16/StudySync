import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import AnimatedBackdrop from "../components/AnimatedBackdrop";
import TailwindCalendar from "../components/TailwindCalendar";


const SelfStudy = () => {
  const [mode, setMode] = useState("focus");

  return (
    <div className="relative min-h-screen overflow-hidden flex">
      {/* Background */}
      <AnimatedBackdrop mode={mode} />

      {/* Sidebar */}
      <Sidebar setMode={setMode} />

      {/* Main Content */}
      <div className="flex flex-col flex-grow relative z-10 ml-16 p-6 w-full">
        {/* Top Title */}
        <div className="text-white text-center mb-8">
          <h1 className="text-4xl font-bold font-mono drop-shadow-lg"> Self Study Mode</h1>
          <p className="text-lg text-white/80">Dreams don’t work unless you do</p>
        </div>

        {/* Content Area */}
        <div className="flex gap-6">
          {/* Calendar on the left */}
          <div className="w-[260px]">
            <TailwindCalendar />
          </div>

          {/* Placeholder for other content (like study tracker, todo, etc.) */}
          
          <div className="flex-1 bg-white/20 backdrop-blur-md rounded-3xl p-6 text-white shadow-xl">
            <p className="text-lg">to do list will come here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfStudy;
