import React from "react";
import focusVideo from "../assets/mood/focus.mp4";
import nightOwlVideo from "../assets/mood/nightowl.mp4";
import chillVideo from "../assets/mood/chill.mp4";
import grindVideo from "../assets/mood/grind.mp4";

const AnimatedBackdrop = ({ mode }) => {
  const getVideoSrc = () => {
    switch (mode) {
      case "nightowl":
        return nightOwlVideo;
      case "chill":
        return chillVideo;
      case "grind":
        return grindVideo;
      case "focus":
      default:
        return focusVideo;
    }
  };

  return (
    <video
      key={mode}
      className="absolute inset-0 w-full h-full object-cover z-0"
      autoPlay
      muted
      loop
    >
      <source src={getVideoSrc()} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default AnimatedBackdrop;
