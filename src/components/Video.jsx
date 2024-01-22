import React, { useEffect, useState } from "react";
import VideoDoc from "../assets/rabatDocFestival.mp4";
import muteImage from "../assets/mute.png";
import unmuteImage from "../assets/unmute.png";
import resumeImage from "../assets/resume.png";
import stopImage from "../assets/stop.png";
import { VIDEO_PLAYER } from "../constants/index.js";

const Video = () => {
  const [videoStarted, setVideoStarted] = useState(false);
  const [stopRequested, setStopRequested] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [stopIcon, setStopIcon] = useState(stopImage);

  useEffect(() => {
    const video = document.querySelector(".video-player");

    // Set initial state for videoStarted to false
    setVideoStarted(false);

    // Set initial state for video.muted
    const handleLoadedMetadata = () => {
      video.muted = isMuted;
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !stopRequested && !videoStarted) {
          video.play().then(() => {
            setVideoStarted(true);
            setStopIcon(stopImage);
          });
        } else if ((!entry.isIntersecting || stopRequested) && videoStarted) {
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.5,
    });

    observer.observe(video);

    const handleVideoEnd = () => {
      setTimeout(() => {
        video.currentTime = 0;
        video.play();
      }, 500);
    };

    video.addEventListener("ended", handleVideoEnd);

    return () => {
      observer.disconnect();
      video.removeEventListener("ended", handleVideoEnd);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [isMuted, stopRequested, videoStarted]);

  const pauseVideo = () => {
    const video = document.querySelector(".video-player");
    if (video) {
      try {
        if (stopRequested) {
          video.play();
          setVideoStarted(true);
          setStopIcon(stopImage);
        } else {
          video.pause();
          setVideoStarted(false);
          setStopIcon(resumeImage);
        }
        setStopRequested(!stopRequested);
        console.log("Video pause/resume successfully");
      } catch (error) {
        console.error("Error pausing/resuming video:", error);
      }
    }
  };

  const handleToggleMute = () => {
    const video = document.querySelector(".video-player");
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  const handlePlay = () => {
    setStopRequested(false);
  };

  return (
    <div className="video-container">
      <div className="video-overlay"></div>
      <div className="video-controls">
        <button
          className="stop-button"
          onClick={pauseVideo}
          style={{
            background: "transparent",
            borderRadius: "50%",
            backgroundColor: "white",
            paddingTop: "15px",
            paddingRight: "15px",
            paddingLeft: "15px",
            paddingBottom: "10px",
            marginLeft: 0,
            marginRight: 1,
            marginBottom: 0,
            border: 0,
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          <img
            src={stopIcon}
            alt={stopRequested ? "Stop" : "Resume"}
            style={{ width: "30px", height: "30px", filter: "invert(100%)" }}
          />
        </button>
        <button
          className="mute-button"
          onClick={handleToggleMute}
          style={{
            background: "transparent",
            borderRadius: "50%",
            margin: 0,
            marginTop: "6%",
            backgroundColor: "white",
            paddingTop: "15px",
            paddingRight: "15px",
            paddingLeft: "15px",
            paddingBottom: "10px",
            border: 0,
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          <img
            src={isMuted ? muteImage : unmuteImage}
            alt={isMuted ? "Mute" : "Unmute"}
            style={{ width: "30px", height: "30px", filter: "invert(100%)" }}
          />
        </button>
      </div>
      <video className="video-player" autoPlay muted onPlay={handlePlay}>
        <source src={VideoDoc} type="video/mp4" />
        {VIDEO_PLAYER.WARNING}
      </video>
    </div>
  );
};

export default Video;
