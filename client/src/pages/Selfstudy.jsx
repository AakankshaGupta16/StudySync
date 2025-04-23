import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import AnimatedBackdrop from "../components/AnimatedBackdrop";
import TailwindCalendar from "../components/TailwindCalendar";
import TodoList from "../components/TodoList";
import PomodoroTimer from "../components/PomodoroTimer";
import DocumentViewer from "../components/Documentviewer";
import AIChatBox from "../components/AIChatbox";
import SpotifyPlayer from "../components/SpotifyPlayer"; // <-- Import here
import dayjs from "dayjs";

const SelfStudy = () => {
  const [mode, setMode] = useState("focus");
  const [isHovered, setIsHovered] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dayjs());

  return (
    <div className="relative min-h-screen overflow-hidden flex">
      <AnimatedBackdrop mode={mode} />

      <div className="flex w-full">
        {/* Sidebar */}
        <div
          className={`transition-all duration-300 ${
            isHovered ? "w-64" : "w-20"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Sidebar setMode={setMode} mode={mode} isHovered={isHovered} />
        </div>

        {/* Main Content */}
        <div className="flex flex-col flex-grow transition-all duration-300 p-6 pt-28">
          {/* Top Bar */}
          <div
            className={`fixed top-0 right-0 z-50 flex justify-between items-center px-8 py-4 bg-black/50 backdrop-blur-lg border-b border-white/20 transition-all duration-300 ${
              isHovered ? "left-64" : "left-20"
            }`}
          >
            <h1 className="text-3xl font-bold text-white font-mono drop-shadow-md">
              Self Study Mode
            </h1>
            <div className="w-[360px]">
              <PomodoroTimer compact />
            </div>
          </div>

          {/* Description */}
          <div className="text-white text-center mb-8">
            <p className="text-lg text-white/80 mt-2">
              Plan your grind with vibes!
            </p>
          </div>

          {/* Main Grid */}
          <div className="flex gap-6">
            {/* Calendar */}
            <div className="w-[260px]">
              <TailwindCalendar
                selectedDate={selectedDate}
                onDateSelect={setSelectedDate}
              />
            </div>

            {/* To-Do List */}
            <div className="flex-1 bg-white/15 backdrop-blur-lg rounded-3xl p-6 text-white shadow-lg border border-white/20">
              <TodoList selectedDate={selectedDate} />
            </div>
          </div>

          {/* Spotify Player */}
          <div className="mt-10">
            <SpotifyPlayer embedUrl="https://open.spotify.com/embed/playlist/37i9dQZF1DX8Uebhn9wzrS?utm_source=generator" />
          </div>

          {/* Document Section */}
          <div className="mt-10">
            <DocumentViewer />
          </div>
        </div>
      </div>

      {/* AI Chatbox */}
      <AIChatBox />
    </div>
  );
};

export default SelfStudy;
