import React from "react";
import image1 from "../assets/si1.JPG";
import image2 from "../assets/si2.JPG";
import { DETAILS_TEXTS } from "../constants/index.js";
import { useTranslation } from "react-i18next";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const Details = () => {
  const { t } = useTranslation();
  return (
    <div className="full-height-container">
      <div className="grid-container-details">
        <div className="grid-item">
          <div className="centered-content1">
            <div className="vertical-image"></div>
          </div>
        </div>
        <div className="grid-item">
          <ScrollAnimation animateIn="fadeIn" animateOnce>
          <div className="nested-grid-item-p">
              <h1 className="titleSijlmassa">{DETAILS_TEXTS.IDENTITY_TITLE}</h1>
              <p className="Sijlmassa">{DETAILS_TEXTS.IDENTITY_CONTENT}</p>
          </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOnce>
          <div className="nested-grid-container2">
            <div className="nested-grid-item">
              <img
                src={image1}
                alt="Image A"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="nested-grid-item2">
                <h1 className="titleSijlmassa" style={{ color: "goldenrod" }}>
                  {DETAILS_TEXTS.VALUE_ADDED_TITLE}
                </h1>
                <p className="Sijlmassa">{DETAILS_TEXTS.VALUE_ADDED_CONTENT}</p>
            </div>
            <div className="nested-grid-item">
              <img
                src={image2}
                alt="Image A"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
          </ScrollAnimation>
        </div>
        <div className="grid-item">
          <div className="centered-content2">
            <div className="vertical-image"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
