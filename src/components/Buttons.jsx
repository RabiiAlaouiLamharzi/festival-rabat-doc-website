import React, { useState } from "react";
import { buttonContent } from "../constants/index.js";
import { useTranslation } from "react-i18next";

const OriginalButtons = () => {
  const { t } = useTranslation();
  const [showBlackScreen, setShowBlackScreen] = useState(false);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);

  const handleClick = (index) => {
    setShowBlackScreen(true);
    setSelectedButtonIndex(index);
  };

  const closeBlackScreen = () => {
    setShowBlackScreen(false);
    setSelectedButtonIndex(null);
  };

  return (
    <>
      <div className="original-buttons-container" style={{ overflowY: "hidden" }}>
        {buttonContent.map((button, index) => (
          <button
            key={index}
            className="original-button"
            onClick={() => handleClick(index)}
          >
            {button.title}
          </button>
        ))}
      </div>

      <div
        className={`original-black-screen ${
          showBlackScreen ? "black-screen-active" : ""
        }`}
        onClick={closeBlackScreen}
      >
        {selectedButtonIndex !== null && (
          <div className="original-overlay">
            <div className="original-text red">→</div>
            <div className="original-title">
              {buttonContent[selectedButtonIndex].title}
            </div>
            <div className="original-text">
              {buttonContent[selectedButtonIndex].text}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default OriginalButtons;
