import React from 'react';
import image from '../assets/african-design.jpg';

const Decorative = () => {
  return (
    <div className="decorative-container">
      <div className="decorative-line" style={{ height: '32px', backgroundImage: `url(${image})` }}></div>
    </div>
  );
};

export default Decorative;
