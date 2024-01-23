import React, { useState, useEffect, useRef } from "react";
import image1 from "../assets/hero1.webp";
import image2 from "../assets/hero2.webp";
import { HERO_TEXTS } from "../constants/index.js";

const Hero = () => {
  const [showImage1, setShowImage1] = useState(true);
  const [barWidth, setBarWidth] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setBarWidth((prev) => {
        const newWidth = prev + 1;
        if (newWidth >= 100) {
          setShowImage1((prev) => !prev);
          return 0;
        } else {
          return newWidth;
        }
      });
    }, 70);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const handleImageChange = (direction) => {
    clearInterval(intervalRef.current);
    setBarWidth(0);
    setShowImage1((prev) => !prev);

    intervalRef.current = setInterval(() => {
      setBarWidth((prev) => {
        const newWidth = prev + 1;
        if (newWidth >= 100) {
          setShowImage1((prev) => !prev);
          return 0;
        } else {
          return newWidth;
        }
      });
    }, 70);
  };
  const handleWatchButtonClick = () => {
    const legalSection = document.getElementById("legal-section");
  
    const highlightDuration = 150; // Duration of each highlight in milliseconds
    const totalHighlights = 4; // Number of times to highlight
  
    // Function to add and remove the highlight class with a delay
    const toggleHighlight = () => {
      legalSection.classList.add("highlighted-section");
      setTimeout(() => {
        legalSection.classList.remove("highlighted-section");
      }, highlightDuration);
    };
  
    // Trigger multiple highlights with delays
    for (let i = 0; i < totalHighlights; i++) {
      setTimeout(toggleHighlight, i * (highlightDuration * 2)); // Adjust the multiplier as needed for spacing
    }
  
    // Scroll to the legal section
    legalSection.scrollIntoView({ behavior: "smooth" });
  };  

  return (
    <div
      className="hero-container"
      style={{
        position: "relative",
        overflow: "hidden",
        height: "auto",
        minHeight: "720px", // Set a minimum height for visibility
      }}
    >
      <div
        className="progress-bar"
        style={{
          width: `${barWidth + 2.5}%`,
          height: "8px",
          backgroundColor: "white",
          position: "absolute",
          bottom: "0",
          left: "0",
          zIndex: 9,
          opacity: 1,
          transition: "width 0.1s ease-in-out",
        }}
      />

      <div className="text-container">
        <h2>{HERO_TEXTS.TITLE}</h2>
        <p>{HERO_TEXTS.PARAGRAPH}</p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button className="buttonClass" onClick={handleWatchButtonClick}>
            {HERO_TEXTS.BUTTON_TEXT}
          </button>
          <div
            style={{
              marginLeft: "auto",
              marginRight: "10%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <button
              className="arrows-container"
              onClick={() => handleImageChange("left")}
            >
              {"←"}
            </button>
            <button
              className="arrows-container"
              style={{ marginLeft: "5px" }}
              onClick={() => handleImageChange("right")}
            >
              {"→"}
            </button>
          </div>
        </div>
      </div>

      <div className="image-container">
          <img
            className={`fade-image ${showImage1 ? "visible" : ""}`}
            src={image1}
            alt="rfced"
          />
          <img
            className={`fade-image ${!showImage1 ? "visible" : ""}`}
            src={image2}
            alt="rfced"
          />
      </div>
    </div>
  );
};

export default Hero;
