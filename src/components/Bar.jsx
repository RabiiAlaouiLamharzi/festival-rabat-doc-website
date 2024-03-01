import React from "react";
import { BAR_TEXT } from "../constants/index.js";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const Bar = () => {
  const repeatedText = Array.from({ length: 30 }, (_, index) => BAR_TEXT).join(
    " "
  );

  return (
    <div className="moving-bar-container">
      <ScrollAnimation animateIn="slideInDown" initiallyVisible>
      <div className="moving-bar">
        <span className="uppercase">{repeatedText}</span>
      </div>
      </ScrollAnimation>
    </div>
  );
};

export default Bar;
