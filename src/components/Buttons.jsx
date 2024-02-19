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
import im6 from "../assets/im6.png";
import im8 from "../assets/im8.jpg";
import im9 from "../assets/im9.jpg";
import im10 from "../assets/im10.jpg";
import im12 from "../assets/im12.jpeg";
import im13 from "../assets/im13.jpg";
import im14 from "../assets/im14.jpg";
import im15 from "../assets/im15.jpg";
import im16 from "../assets/im16.jpg";
import im17 from "../assets/im17.jpg";
import im18 from "../assets/im18.jpg";
import im19 from "../assets/im19.jpg";
import im20 from "../assets/im20.jpg";
import im21 from "../assets/im21.jpg";
import im22 from "../assets/im22.jpg";
import im23 from "../assets/im23.jpg";
import im24 from "../assets/im24.jpg";
import im25 from "../assets/im25.jpg";
import im26 from "../assets/im26.jpg";
import im27 from "../assets/im27.jpg";
import im28 from "../assets/im28.jpg";
import im29 from "../assets/im29.jpg";
import im30 from "../assets/im30.jpg";
import im31 from "../assets/im31.jpg";
import im32 from "../assets/im32.jpg";
import im33 from "../assets/im33.jpg";
import im34 from "../assets/im34.jpg";



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

  const renderButtonContent = () => {
    if (selectedButtonIndex !== null) {
      const button = buttonContent[selectedButtonIndex];
  
      const commonImageStyle = {
        width: "45%", // Adjust the width as needed
        height: "25vw", // Adjust the height as needed (using viewport width unit)
        objectFit: "cover", // Maintain aspect ratio and cover the container
        display: "block",

      };
      const commonImageStyle2 = {
        width: "45%", // Adjust the width as needed
        height: "20vw", // Adjust the height as needed (using viewport width unit)
        objectFit: "cover", // Maintain aspect ratio and cover the container
        display: "block",

      };
  
      switch (selectedButtonIndex) {
        case 0:
          return (
            <>
              <div className="original-text red" style={{ margin: "0px", padding: "0px" }}>→</div>
              <div className="original-title">{button.title}</div>
              <div className="original-text" style={{ paddingBottom: "40px" }}>{button.text}</div>
              <div className="conference-image-container">
                <img src={im26} className="conference-image conference-image-1" alt="Image 2" />
                <img src={im27} className="conference-image conference-image-2" alt="Image 3" />
                <img src={im28} className="conference-image conference-image-3" alt="Image 4" />
                <img src={im29} className="conference-image conference-image-4" alt="Image 5" />
                <img src={im30} className="conference-image conference-image-5" alt="Image 6" />
                <img src={im31} className="conference-image conference-image-6" alt="Image 7" />
              </div>
            </>
          );
        case 1:
          return (
            <>
              <div className="original-text red" style={{ margin: "0px", padding: "0px" }}>→</div>
              <div className="original-title">{button.title}</div>
              <div className="original-text" style={{ paddingBottom: "40px" }}>{button.text}</div>
              <div className="winners-image-container">
                <img src={im8} style={commonImageStyle2} alt="Image 2" />
                <img src={im9} style={commonImageStyle2} alt="Image 3" />
                <img src={im10} style={commonImageStyle2} alt="Image 4" />
                <img src={im12} style={commonImageStyle2} alt="Image 3" />
                <img src={im13} style={commonImageStyle2} alt="Image 4" />
              </div>
            </>
          );
        case 3:
          return (
            <>
            <div className="original-text red" style={{ margin: "0px", padding: "0px" }}>→</div>
            <div className="original-title">{button.title}</div>
            <div className="original-text" style={{ paddingBottom: "40px" }}>{button.text}</div>
            <div className="workshops-image-container">
              <img src={im14} className="workshop-image workshop-image-1" alt="Image 2" />
              <img src={im15} className="workshop-image workshop-image-2" alt="Image 3" />
              <img src={im16} className="workshop-image workshop-image-3" alt="Image 4" />
              <img src={im17} className="workshop-image workshop-image-4" alt="Image 5" />
              <img src={im18} className="workshop-image workshop-image-5" alt="Image 6" />
              <img src={im19} className="workshop-image workshop-image-6" alt="Image 7" />
              <img src={im20} className="workshop-image workshop-image-7" alt="Image 8" />
              <img src={im21} className="workshop-image workshop-image-8" alt="Image 9" />
              <img src={im22} className="workshop-image workshop-image-9" alt="Image 10" />
              <img src={im23} className="workshop-image" alt="Image 11" />
              <img src={im24} className="workshop-image" alt="Image 12" />
              <img src={im25} className="workshop-image" alt="Image 13" />
            </div>
          </>
          );
        case 4:
          return (
            <>
              <div className="original-text red" style={{ margin: "0px", padding: "0px" }}>→</div>
              <div className="original-title">{button.title}</div>
              <div className="original-text" style={{ paddingBottom: "40px" }}>{button.text}</div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img src={im32} style={commonImageStyle2} alt="Image 2" />
                <img src={im34} style={commonImageStyle2} alt="Image 3" />
                <img src={im33} style={commonImageStyle2} alt="Image 4" />
              </div>
            </>
          );
        default:
          return (
            <>
              <div className="original-text red" style={{ margin: "0px", padding: "0px" }}>→</div>
              <div className="original-title">{button.title}</div>
              <div className="original-text" style={{ paddingBottom: "40px" }}>{button.text}</div>
            </>
          );
      }
    }
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
          <div className="original-overlay">{renderButtonContent()}</div>
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
