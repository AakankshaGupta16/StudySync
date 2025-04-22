import React, { useState, useEffect } from "react";

const PomodoroTimer = ({ compact = false }) => {
  const [focusMinutes, setFocusMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [secondsLeft, setSecondsLeft] = useState(focusMinutes * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isFocusTime, setIsFocusTime] = useState(true);
  const [selectedMode, setSelectedMode] = useState("Focus");

  useEffect(() => {
    setIsFocusTime(selectedMode === "Focus");
    setSecondsLeft(
      selectedMode === "Focus" ? focusMinutes * 60 : breakMinutes * 60
    );
    setIsRunning(false);
  }, [selectedMode, focusMinutes, breakMinutes]);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev === 0) {
            const next = isFocusTime ? breakMinutes * 60 : focusMinutes * 60;
            setIsFocusTime(!isFocusTime);
            setSelectedMode(isFocusTime ? "Break" : "Focus");
            return next;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, isFocusTime, focusMinutes, breakMinutes]);

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  const handleStartPause = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSecondsLeft(isFocusTime ? focusMinutes * 60 : breakMinutes * 60);
  };

  const handleManualTimeChange = (e) => {
    const value = e.target.value;
    const [m, s] = value.split(":").map(Number);
    const totalSeconds = m * 60 + s;
    if (!isNaN(totalSeconds)) {
      setSecondsLeft(totalSeconds);
      if (selectedMode === "Focus") setFocusMinutes(m);
      else setBreakMinutes(m);
    }
  };

  if (compact) {
    return (
      <div className="flex items-center justify-between px-4 py-2 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full shadow-md gap-4 font-mono">
        <select
          value={selectedMode}
          onChange={(e) => setSelectedMode(e.target.value)}
          className="bg-white text-black font-semibold px-2 py-1 rounded-md border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option className="bg-white text-black" value="Focus">Focus</option>
          <option className="bg-white text-black" value="Break">Break</option>
        </select>

        {isRunning ? (
          <span className="text-sm font-semibold whitespace-nowrap">
            {formatTime(secondsLeft)}
          </span>
        ) : (
          <input
            type="text"
            value={formatTime(secondsLeft)}
            onChange={handleManualTimeChange}
            className="w-20 text-center rounded-md bg-white/80 text-black border border-white/30 text-sm outline-none"
          />
        )}

        <div className="flex gap-2">
          <button
            onClick={handleStartPause}
            className={`text-sm px-2 py-1 rounded-md ${
              isRunning
                ? "bg-yellow-500 hover:bg-yellow-600"
                : "bg-green-500 hover:bg-green-600"
            } transition`}
            title={isRunning ? "Pause" : "Start"}
          >
            {isRunning ? "⏸" : "▶"}
          </button>
          <button
            onClick={handleReset}
            className="text-sm px-2 py-1 rounded-md bg-red-500 hover:bg-red-600 transition"
            title="Reset"
          >
            ⟳
          </button>
        </div>
      </div>
    );
  }

  // Full layout version here if needed
  return (
    <div className="bg-white/15 backdrop-blur-lg border border-white/20 text-white rounded-3xl p-6 shadow-xl max-w-xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4 font-mono drop-shadow-md">
        Pomodoro Timer
      </h2>
      <div className="flex justify-center gap-6 mb-6 text-black">
        <div className="flex flex-col items-center">
          <label className="text-white mb-1 text-sm">Focus (min)</label>
          <input
            type="number"
            min="1"
            value={focusMinutes}
            onChange={(e) => setFocusMinutes(Number(e.target.value))}
            className="w-20 px-3 py-2 rounded-lg text-center bg-white/80 text-black outline-none"
            disabled={isRunning}
          />
        </div>
        <div className="flex flex-col items-center">
          <label className="text-white mb-1 text-sm">Break (min)</label>
          <input
            type="number"
            min="1"
            value={breakMinutes}
            onChange={(e) => setBreakMinutes(Number(e.target.value))}
            className="w-20 px-3 py-2 rounded-lg text-center bg-white/80 text-black outline-none"
            disabled={isRunning}
          />
        </div>
      </div>
      <div className="text-center mb-6">
        <p className="text-lg uppercase tracking-wide text-white/70 font-semibold mb-1">
          {isFocusTime ? "Focus Time" : "Break Time"}
        </p>
        <h1 className="text-6xl font-bold font-mono tracking-widest">
          {formatTime(secondsLeft)}
        </h1>
      </div>
      <div className="flex justify-center gap-4">
        <button
          onClick={handleStartPause}
          className={`px-6 py-2 rounded-xl ${
            isRunning ? "bg-yellow-500 hover:bg-yellow-600" : "bg-green-500 hover:bg-green-600"
          } text-white font-semibold shadow-md transition`}
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          onClick={handleReset}
          className="px-6 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white font-semibold shadow-md transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default PomodoroTimer;
