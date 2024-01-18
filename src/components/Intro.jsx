import React from "react";
import Logo from "../assets/logoIntro.png";
import { INTRO_TEXTS } from "../constants/index.js";
import { useTranslation } from "react-i18next";
import LazyLoad from 'react-lazyload';

const Intro = () => {
  const { t } = useTranslation();
  return (
    <div className="intro-container">
      <div className="image-container">
        <LazyLoad>
        <img className="imageTitle" src={Logo} alt="Intro Image" />
        </LazyLoad>
      </div>
      <p className="white-paragraph">{INTRO_TEXTS.PARAGRAPH}</p>
    </div>
  );
};

export default Intro;
