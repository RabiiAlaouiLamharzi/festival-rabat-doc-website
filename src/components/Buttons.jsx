import React, { useState } from "react";
import { buttonContent } from "../constants/index.js";
import closeImage from "../assets/close.png";

// Import images
import image1 from "../assets/pressbook-46.jpg";
import image2 from "../assets/pressbook-47.jpg";
import image3 from "../assets/pressbook-48.jpg";
import image4 from "../assets/pressbook-49.jpg";
import image5 from "../assets/pressbook-50.jpg";
import image6 from "../assets/pressbook-51.jpg";
import image7 from "../assets/pressbook-52.jpg";
import image8 from "../assets/pressbook-53.jpg";
import image9 from "../assets/pressbook-54.jpg";
import image10 from "../assets/pressbook-55.jpg";
import image11 from "../assets/pressbook-56.jpg";
import image12 from "../assets/pressbook-57.jpg";
import image13 from "../assets/pressbook-58.jpg";
import image14 from "../assets/pressbook-59.jpg";
import image15 from "../assets/pressbook-60.jpg";
import image16 from "../assets/pressbook-61.jpg";
import image17 from "../assets/pressbook-62.jpg";
import image18 from "../assets/pressbook-63.jpg";
import image19 from "../assets/pressbook-64.jpg";
import image20 from "../assets/pressbook-65.jpg";
import image21 from "../assets/pressbook-66.jpg";
import image22 from "../assets/pressbook-67.jpg";
import image23 from "../assets/pressbook-68.jpg";
import image24 from "../assets/pressbook-69.jpg";
import image25 from "../assets/pressbook-70.jpg";
import image26 from "../assets/pressbook-71.jpg";
import image27 from "../assets/pressbook-72.jpg";
import image28 from "../assets/pressbook-73.jpg";
import image29 from "../assets/pressbook-74.jpg";
import image30 from "../assets/pressbook-75.jpg";
import image31 from "../assets/pressbook-76.jpg";
import image32 from "../assets/pressbook-77.jpg";
import image33 from "../assets/pressbook-78.jpg";
import image34 from "../assets/pressbook-79.jpg";
import image35 from "../assets/pressbook-80.jpg";
import image36 from "../assets/pressbook-81.jpg";

const images = [
  image1, image2, image3, image4, image5, image6, image7, image8, image9,
  image10, image11, image12, image13, image14, image15, image16, image17, image18,
  image19, image20, image21, image22, image23, image24, image25, image26, image27,
  image28, image29, image30, image31, image32, image33, image34, image35, image36
];

const OriginalButtons = () => {
  const [showBlackScreen, setShowBlackScreen] = useState(false);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (index) => {
    setShowBlackScreen(true);
    setSelectedButtonIndex(index);
  };

  const closeBlackScreen = () => {
    setShowBlackScreen(false);
    setSelectedButtonIndex(null);
  };

  const handleOverlayClick = () => {
    if (selectedButtonIndex !== null && selectedButtonIndex !== 2) {
      closeBlackScreen();
    }
  };

  const handleArrowClick = (direction) => {
    setCurrentSlide((prevSlide) =>
      direction === "left" ? (prevSlide === 0 ? 35 : prevSlide - 1) : (prevSlide + 1) % 36
    );
  };

  return (
    <>
      <div className="original-buttons-container" style={{ overflowY: "hidden" }}>
        {buttonContent.map((button, index) => (
          <button
            key={index}
            className="original-button"
            style={
              index === 2
                ? {
                    paddingTop: "25px",
                    paddingBottom: "25px",
                    fontSize: "24px",
                    // Add any additional styles you want here
                  }
                : {}
            }
            onClick={() => handleClick(index)}
          >
            {button.title}
          </button>
        ))}
      </div>

      <div
        className={`original-black-screen ${showBlackScreen ? "black-screen-active" : ""} ${
          selectedButtonIndex === 2 ? "transparent-background" : ""
        }`}
        onClick={handleOverlayClick}
      >
        {selectedButtonIndex !== null && selectedButtonIndex !== 2 && (
          <div className="original-overlay">
            <div className="original-text red">→</div>
            <div className="original-title">{buttonContent[selectedButtonIndex].title}</div>
            <div className="original-text">{buttonContent[selectedButtonIndex].text}</div>
          </div>
        )}

        {selectedButtonIndex === 2 && (
          <div className="transparent-background-overlay">
            <div className="center slide">
              {images.slice(currentSlide, currentSlide + 1).map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Image ${currentSlide + i + 1}`}
                  style={{ display: "block" }}
                />
              ))}
            </div>
            <img src={closeImage} alt="Close" className="close-button" onClick={closeBlackScreen} />
            <div className="arrow left" onClick={() => handleArrowClick("left")}>
              &#8249;
            </div>
            <div className="arrow right" onClick={() => handleArrowClick("right")}>
              &#8250;
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default OriginalButtons;
