import React from 'react';
import img1 from "../assets/hommage1.jpg";
import img2 from "../assets/hommage2.jpg";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const Hommage = () => {
  return (
    <div style={{ backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '3%', }}>
      <ScrollAnimation animateIn="fadeIn" animateOnce>
      <div className='hommage-div'>
        <div className='hommage-text'>
          <h2 className='hommage-title' style={{ color: 'black' }}>Hommage</h2>
          <p className='hommage-para' style={{ color: 'black' }}>
            Rabat’Doc a rendu hommage à des figures emblématiques du cinéma africain, l’auteur, réalisateur, directeur de la photographie et producteur marocain, Ahmed El Maânouni et le réalisateur et professeur d’audiovisuel bukinabais Issiaka Konaté.
          </p>
        </div>
        <div className='hommage-images'>
          <img src={img1} alt="444" />
          <img src={img2} alt="44" />
        </div>
      </div>
      </ScrollAnimation>
    </div>
  );
};

export default Hommage;
