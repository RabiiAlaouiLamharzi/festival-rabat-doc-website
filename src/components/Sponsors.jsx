import React, { useEffect } from "react";
import image1 from "../assets/UM5.png";
import image2 from "../assets/association.png";
import image3 from "../assets/Jasera.png";
import image4 from "../assets/culture.png";
import image5 from "../assets/conseil.png";

const Sponsors = () => {
  useEffect(() => {
    // Animation logic
    const filmstrip = document.getElementsByClassName("filmstrip-wrapper")[0];
    filmstrip.addEventListener("animationiteration", () => {
      // Loop through all the frames and swap their images
      const filmstripFrames =
        document.getElementsByClassName("filmstrip-frame");
      let nextImg = filmstripFrames[0].getElementsByTagName("img")[0].src;
      for (let i = filmstripFrames.length - 1; i >= 0; --i) {
        // iterate backwards
        const frame = filmstripFrames[i];
        const img = frame.getElementsByTagName("img")[0];
        const imgSrc = img.src;
        img.src = nextImg;
        nextImg = imgSrc;
      }
    });
  }, []);

  return (
    <div className="filmstrip-wrapper">
      <div className="filmstrip">
        <div className="straight-line top"></div>
        <div className="dashed-line top"></div>
        <div className="filmstrip-frame">
          <img src={image1} alt="Frame 1" />
        </div>
        <div className="filmstrip-frame">
          <img src={image2} alt="Frame 1" />
        </div>
        <div className="filmstrip-frame">
          <img src={image3} alt="Frame 1" />
        </div>
        <div className="filmstrip-frame">
          <img src={image4} alt="Frame 1" />
        </div>
        <div className="filmstrip-frame">
          <img src={image5} alt="Frame 1" />
        </div>
        <div className="filmstrip-frame">
          <img src={image1} alt="Frame 1" />
        </div>
        <div className="filmstrip-frame">
          <img src={image2} alt="Frame 1" />
        </div>
        <div className="filmstrip-frame">
          <img src={image3} alt="Frame 1" />
        </div>
        <div className="filmstrip-frame">
          <img src={image4} alt="Frame 1" />
        </div>
        <div className="filmstrip-frame">
          <img src={image5} alt="Frame 1" />
        </div>
        <div className="dashed-line bottom"></div>
        <div className="straight-line bottom"></div>
      </div>
    </div>
  );
};

export default Sponsors;
