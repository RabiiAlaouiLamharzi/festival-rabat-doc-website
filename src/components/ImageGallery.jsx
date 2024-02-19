import React, { useState } from 'react';
import film1 from "../assets/film1.jpg";
import film2 from "../assets/film2.jpeg";
import film3 from "../assets/film3.jpg";
import film4 from "../assets/film4.jpg";
import film5 from "../assets/film5.jpg";
import film6 from "../assets/film6.jpg";
import film7 from "../assets/film7.jpg";
import film8 from "../assets/film8.png";
import closeIcon from "../assets/close.png";

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    film1,
    film2,
    film3,
    film4,
    film5,
    film6,
    film7,
    film8,
  ];

  // Array containing title and paragraph for each image
  const imageInfo = [
    { title2: "Synopsis", p2: "La République Démocratique du Congo pourrait nourrir près d'une personne sur deux sur Terre. Pourtant un congolais sur deux souffre de malnutrition aiguë modérée. Face à ce paradoxe, les paysans se regroupent en coopératives agricoles." },
    { title2: "Synopsis", p2: "Un jour, au pied d'un tombeau, Hassan s'est endormi et n'est plus jamais reparti du cimetière. Depuis 40 ans, il veille les morts et observe les vivants. En quête d'amour et de liberté, Hassan navigue entre jour et nuit et nous invite à découvrir ses mondes." },
    { title2: "Synopsis", p2: "Pendant la guerre de 1997 au Congo RDC, ancien Zaire, Francine, une jeune fille congolaise âgée de 12 ans a été recrutée par l'armée rwandaise pour chasser Mobutu du pouvoir. 20 ans après, la maman de Francine vient lui rendre visite et lui raconte son histoire." },
    { title2: "Synopsis", p2: "Touré Inza Junior vient de Côte d'Ivoire après avoir traversé le désert, les camps de réfugiés en Libye et la Méditerranée. En Italie, il se sent à l'étroit dans un centre pour demandeurs d'asile et rêve de la France." },
    { title2: "Synopsis", p2: "Lieu de transit et d'accueil, la « maison du migrant » de Gao au Mali est un endroit où on s'attelle à remettre sur pied des voyageurs en détresse en leur offrant une écoute, un toit et des repas. Natacha est condamnée à rester à la maison du migrant car elle ne sait pas d'où elle vient." },
    { title2: "Synopsis", p2: "Le film relate le quotidien d'une communauté qui vit loin de la ville et de la société dans des conditions très particulières et selon des rites spécifiques dans le grand sud marocain." },
    { title2: "Synopsis", p2: "Un jeune photographe reçoit en héritage la malle de négatifs de son aîné. Portrait croisé de Paul Kodjo, l'un des photographes les plus influents de la Côte d'Ivoire post-coloniale et de Ananias Léki Dago, photographe ivoirien contemporain." },
    { title2: "Synopsis", p2: "Le film retrace le parcours du cinéaste Drissa Touré, autodidacte qui était à l'origine chauffeur de taxi, ainsi que sa rencontre avec le réalisateur Ousmane Sembène qui a changé sa vie. Ce documentaire attire l'attention sur la piètre situation du cinéma aujourd'hui." },
  ];

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handleCloseOverlay = () => {
    setSelectedImage(null);
  };

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Film ${index + 1}`}
          className={`gallery-image ${selectedImage === index ? 'selected' : ''}`}
          onClick={() => handleImageClick(index)}
        />
      ))}
      {selectedImage !== null && (
        <div className="imim-overlay">
          <img
            src={closeIcon}
            alt="Close"
            className="close-icon-overlay"
            onClick={(e) => {
                e.stopPropagation(); // Prevent the overlay from closing when clicking on the close icon
                handleCloseOverlay();
            }}
          />
          <div className="imim-overlay-content">
            <img
              src={images[selectedImage]}
              alt={`Film ${selectedImage + 1}`}
              width="300px"
              height="450px"
              className="selected-image"
            />
            <div className="imim-text">
              <h1 className="imim-title">{imageInfo[selectedImage].title2}</h1>
              <div className="imim-paragraph-div"><p className="imim-paragraph">{imageInfo[selectedImage].p2}</p></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
