import React, { useState } from "react";
import ReactPlayer from "react-player";
import VideoDoc from "../assets/rabatDocFestival.mp4";
import muteImage from "../assets/mute.png";
import unmuteImage from "../assets/unmute.png";
import playImage from "../assets/play.png";
import pauseImage from "../assets/pause.png";

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(true); // Initially set to true for playing
  const [isMuted, setIsMuted] = useState(true); // Initially set to true for muted

  const handleVideoClick = () => {
    setIsPlaying(!isPlaying);
  };

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="video-container">
      <div className="control-buttons">
        <button className="control-button" onClick={handleToggleMute}>
          <img
            src={isMuted ? muteImage : unmuteImage}
            alt={isMuted ? "Unmute" : "Mute"}
            style={{ height: "40px", paddingTop: "10%", filter: isMuted ? "brightness(0)" : "brightness(0)" }}
          />
        </button>
        <button className="control-button" onClick={handleVideoClick} style={{ paddingLeft: "5%" }}>
          <img
            src={isPlaying ? pauseImage : playImage}
            alt={isPlaying ? "Pause" : "Play"}
            style={{ height: "40px", paddingTop: "14%"}}
          />
        </button>
      </div>
      <div className="video-overlay" onClick={handleVideoClick}></div>
      <ReactPlayer
        url={VideoDoc}
        width="100%"
        height="100%"
        playing={isPlaying}
        muted={isMuted}
        loop
      />
    </div>
  );
};

export default Video;
