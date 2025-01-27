import React, { useState } from "react";
import "../assets/styles/FlippingCard.css";

const FlippingCard = ({ frontImage, frontName, frontTitle, backText }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flipping-card ${isFlipped ? "flipped" : ""}`} onClick={handleFlip}>
      <div className="flipping-card-inner">
        {/* Front Side */}
        <div className="flipping-card-front">
          <img src={frontImage} alt={frontName} className="flipping-card-image" />
          <div className="flipping-card-content">
            <h4 >{frontName}</h4>
            <p>{frontTitle}</p>
          </div>
        </div>

        {/* Back Side */}
        <div className="flipping-card-back">
          <p>{backText}</p>
        </div>
      </div>
    </div>
  );
};

export default FlippingCard;
