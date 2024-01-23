import React, { useState, useEffect } from "react";
import image1 from "../assets/win1.jpg";
import image2 from "../assets/win2.jpg";
import image3 from "../assets/win3.jpg";
import image4 from "../assets/win4.jpg";
import image5 from "../assets/win5.jpg";
import placeholderImage from "../assets/placeholder.png";
import { WINNERS_TEXTS } from "../constants/index.js";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const Winners = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const images = [image1, image2, image3, image4, image5];

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentImage]);

  const nextImage = () => {
    setIsImageLoaded(false);
    setTimeout(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      setIsImageLoaded(true);
    }, 500); // Adjust the delay time as needed
  };

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  const goToImage = (index) => {
    setIsImageLoaded(false);
    setTimeout(() => {
      setCurrentImage(index);
      setIsImageLoaded(true);
    }, 500);
  };

  return (
    <div className="noise winners-container">
      <div className="grid-container">
        <div className="left-column">
        <ScrollAnimation animateIn="fadeIn" animateOnce>
          <img
            src={placeholderImage}
            alt="Placeholder"
            className={`placeholder-image ${isImageLoaded ? "hidden" : ""}`}
          />
          <h1 className="big-title">{WINNERS_TEXTS.TITLE}</h1>
          <h2 className="small-title">{WINNERS_TEXTS.DESCRIPTION}</h2>
          <br />
          <h2 className="small-title2">{WINNERS_TEXTS.DETAILS}</h2>
        </ScrollAnimation>
        </div>
        <div className="right-column">
          <ScrollAnimation animateIn="fadeIn" animateOnce>
          <div className="image-slider">
            <img
              src={images[currentImage]}
              alt={`Winner ${currentImage + 1}`}
              className={`slider-image ${isImageLoaded ? "visible" : ""}`}
              onLoad={handleImageLoad}
            />
          </div>
          <div className="slider-dots">
            {images.map((_, index) => (
              <span
                key={index}
                className={`slider-dot ${
                  index === currentImage ? "active" : ""
                }`}
                onClick={() => goToImage(index)} // Updated onClick event
              />
            ))}
          </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default Winners;
