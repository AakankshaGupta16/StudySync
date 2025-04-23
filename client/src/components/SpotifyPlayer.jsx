import React from 'react';

const YouTubePlayer = ({ videoId }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 mt-4">
      <h2 className="text-xl font-semibold mb-2">Study Music</h2>
      <iframe
        width="100%"
        height="160"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&loop=1&playlist=${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Music Player"
        className="rounded-md"
      />
    </div>
  );
};

export default YouTubePlayer;
