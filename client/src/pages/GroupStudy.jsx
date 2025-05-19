import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GroupStudy = () => {
  const [roomCode, setRoomCode] = useState('');
  const [members, setMembers] = useState(2);
  const [error, setError] = useState('');
  const [isCreated, setIsCreated] = useState(false); // to toggle UI after creating room

  const navigate = useNavigate();

  const handleCreateRoom = () => {
    const generatedCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    setRoomCode(generatedCode);
    setIsCreated(true);
  };

  const handleJoinCreatedRoom = () => {
    if (roomCode.trim()) {
      navigate('/group-study-room', { state: { roomCode, members } });
    } else {
      setError('Room code is missing.');
    }
  };

  const handleJoinWithCode = () => {
    if (roomCode.trim()) {
      navigate('/group-study-room', { state: { roomCode, members } });
    } else {
      setError('Please enter a room code.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          {isCreated ? 'Room Created!' : 'Enter or Create Study Room'}
        </h2>

        {isCreated ? (
          <>
            <p className="text-lg font-semibold text-center mb-4">
              Your Room Code: <span className="text-indigo-600">{roomCode}</span>
            </p>
            <p className="text-center mb-4">Share this code with others to join your room.</p>

            <div className="flex justify-center items-center mb-6">
              <label className="mr-2 font-medium">Members: </label>
              <select
                value={members}
                onChange={(e) => setMembers(Number(e.target.value))}
                className="w-20 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400"
              >
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </select>
            </div>

            <button
              onClick={handleJoinCreatedRoom}
              className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Join Room
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleCreateRoom}
              className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition mb-4"
            >
              Create Room
            </button>

            <p className="text-center text-indigo-600 mb-4">OR</p>

            <input
              type="text"
              placeholder="Enter your code to join room"
              value={roomCode}
              onChange={(e) => {
                setRoomCode(e.target.value.toUpperCase());
                setError('');
              }}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 mb-4"
            />
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            <button
              onClick={handleJoinWithCode}
              className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Join Room
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default GroupStudy;
