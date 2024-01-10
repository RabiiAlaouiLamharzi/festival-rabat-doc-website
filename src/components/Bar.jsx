import React from "react";
import { BAR_TEXT } from "../constants/index.js";

const Bar = () => {
  const repeatedText = Array.from({ length: 30 }, (_, index) => BAR_TEXT).join(
    " "
  );

  return (
    <div className="moving-bar-container">
      <div className="moving-bar">
        <span className="uppercase">{repeatedText}</span>
      </div>
    </div>
  );
};

export default Bar;
