import React, { useState } from 'react';

const SpotifyPlayer = () => {
  const [spotifyUrl, setSpotifyUrl] = useState('');
  const [embedUrl, setEmbedUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const url = new URL(spotifyUrl);
      const [, type, id] = url.pathname.split('/');
      if (!['track', 'playlist', 'album'].includes(type)) throw new Error();

      const embed = `https://open.spotify.com/embed/${type}/${id}?utm_source=generator`;
      setEmbedUrl(embed);
    } catch {
      alert('Please enter a valid Spotify track/playlist/album URL');
    }
  };

  return (
    <div className="bg-black/40 rounded-2xl shadow-xl p-4 mt-10 backdrop-blur-md border border-white/20 text-white">
      <h2 className="text-2xl font-bold mb-4 font-mono drop-shadow">Study Music </h2>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Paste your Spotify playlist/track/album link here"
          value={spotifyUrl}
          onChange={(e) => setSpotifyUrl(e.target.value)}
          className="p-2 rounded-lg text-white w-full flex-1"
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          Load
        </button>
      </form>

      {embedUrl && (
        <div className="w-full">
          <iframe
            src={embedUrl}
            width="100%"
            height="400"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="rounded-xl shadow-md"
            title="Spotify Embed"
          />
        </div>
      )}
    </div>
  );
};

export default SpotifyPlayer;
