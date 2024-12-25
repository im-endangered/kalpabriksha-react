import React from "react";
import "../assets/styles/change.css";

const Achievements = () => {
  return (
    <div className="achievements-section">
      <div className="achievements-overlay">
        <h2>Our Achievements in Numbers</h2>
        <p>
          We can talk for a long time about advantages of our sessions. Here
          are some facts in order to know how far we have reached in our
          mission.
        </p>
        <div className="achievements-grid">
          <div className="achievement-item">
            <h3>40+</h3>
            <span>Volunteers</span>
          </div>
          <div className="achievement-item">
            <h3>12+</h3>
            <span>Schools</span>
          </div>
          <div className="achievement-item">
            <h3>4</h3>
            <span>Districts</span>
          </div>
          <div className="achievement-item">
            <h3>2000+</h3>
            <span>Students Trained</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
