import React, { useState } from 'react';
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";
import photo5 from "../assets/photo5.jpg";
import photo6 from "../assets/photo6.jpg";
import photo7 from "../assets/photo7.jpg";
import photo8 from "../assets/photo8.jpg";
import photo9 from "../assets/photo9.jpg";
import photo10 from "../assets/photo10.jpg";
import photo11 from "../assets/photo11.jpg";
import photo12 from "../assets/photo12.jpg";
import photo13 from "../assets/photo13.jpg";
import photo14 from "../assets/photo14.jpg";
import photo15 from "../assets/photo15.jpg";
import photo16 from "../assets/photo16.jpg";
import photo17 from "../assets/photo17.jpg";
import photo18 from "../assets/photo18.jpg";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const ReactGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Array containing paths to your images
  const images = [
    photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9,
    photo10, photo11, photo12, photo16, photo17, photo18
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="header-section">
        <h3 className="small-title">
          <span></span>
          EXPOSITION VISUELLE
        </h3>
        <h3 className="big-title">
          Gallerie de Photos
        </h3>
      </div>
      <ScrollAnimation animateIn="fadeIn" animateOnce>
      <div className="react-gallery">
        {images.map((image, index) => (
          <div key={index} className="react-image-container">
            <img
              src={image}
              alt={`Image ${index}`}
              className="react-thumbnail"
              onClick={() => handleImageClick(image)}
            />
          </div>
        ))}
        {selectedImage && (
          <div className="react-modal-overlay" onClick={handleCloseModal}>
            <div className="react-modal">
              <img src={selectedImage} alt="Selected" />
            </div>
          </div>
        )}
      </div>
      </ScrollAnimation>
    </>
  );
};

export default ReactGallery;
