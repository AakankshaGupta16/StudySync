import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import AnimatedBackdrop from "../components/AnimatedBackdrop";
import TailwindCalendar from "../components/TailwindCalendar";
import TodoList from "../components/TodoList";
import PomodoroTimer from "../components/PomodoroTimer";
import DocumentViewer from "../components/Documentviewer"; // ✅ NEW IMPORT
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
        <div className="flex flex-col flex-grow transition-all duration-300 p-6">
          <div className="text-white text-center mb-8">
            <h1 className="text-4xl font-bold font-mono drop-shadow-lg">
              Self Study Mode
            </h1>
            <p className="text-lg text-white/80">
              Plan your grind with vibes!
            </p>
          </div>

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

          {/* Pomodoro Timer */}
          <div className="mt-10">
            <PomodoroTimer />
          </div>

          {/* 📚 Document Upload & Preview Section */}
          <div className="mt-10">
            <DocumentViewer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfStudy;
