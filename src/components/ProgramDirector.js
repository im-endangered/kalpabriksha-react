import React from "react";
import "../assets/styles/change.css";
import abhinabImage from "../assets/images/team/abhinab.png"


const ProgramDirector = () => {
  return (
    <div className="program-director-section">
      <h3>Program Director</h3>
      <div className="director-card">
        <img
          src={abhinabImage} // Replace with the actual path to the director's image
          alt="Program Director"
          className="director-image"
        />
        <div className="director-details">
          <h4>Abhinab Khanal</h4>
          <p>Email: <a href="mailto:director.cbwc@kalpabriksha.org">director.cbwc@kalpabriksha.org</a></p>
        </div>
      </div>
    </div>
  );
};

export default ProgramDirector;
