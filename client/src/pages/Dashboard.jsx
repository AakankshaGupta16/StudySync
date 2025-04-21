import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleModeClick = (mode) => {
    navigate(`/${mode}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-pink-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-purple-700 mb-6">Choose Your Study Mode</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <div
          className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl cursor-pointer transition"
          onClick={() => handleModeClick('self-study')}
        >
          <h2 className="text-2xl font-semibold text-purple-600 mb-2">Self Study Mode</h2>
          <p className="text-gray-600">Plan your solo sessions with Pomodoro, daily goals, mood tracker, and more.</p>
        </div>

        <div
          className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl cursor-pointer transition"
          onClick={() => handleModeClick('group-study')}
        >
          <h2 className="text-2xl font-semibold text-pink-600 mb-2">Group Study Mode</h2>
          <p className="text-gray-600">Study with friends, sync goals, chat, and track sessions together.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
