import React from "react";
import Navbar from "../components/navbar";
import HeaderSeparator from "../components/HeaderSeparator";
import FlippingCard from "../components/FlippingCard";
import Footer from "../components/footer";
import "../assets/styles/bod.css";

import nitamImage from '../assets/images/team/nitam.png';
import monikaImage from "../assets/images/team/monika.png"
const BOD = () => {
  const teamMembers = [
    {
      id: 1,
      frontImage: nitamImage,
      frontName: "Nitamraj Poudel",
      frontTitle: "President",
      backText: 
        <div class="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="mailto:nitam@example.com">
            <i class="fas fa-envelope"></i>
          </a>
        </div>
      ,
    },
    {
      id: 2,
      frontImage: monikaImage,
      frontName: "Monika Shrestha",
      frontTitle: "Vice-President",
      backText: 
        <div class="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="mailto:monika@example.com">
            <i class="fas fa-envelope"></i>
          </a>
        </div>
      ,
    },
    
    // Add more members here as needed...
  ];

  return (
    <div>
      <Navbar />
      <HeaderSeparator
        title="Board of Directors"
        breadcrumb={[{ name: "Home", link: "/" }, { name: "Board of Directors" }]}
      />
      <div className="bod-container container">
        <h3 className="bod-heading">Meet the executive team behind every Kalpabriksha operation.</h3>
        <div className="row bod-grid">
          {teamMembers.map((member) => (
            <div className="col-md-3 col-sm-6 mb-4" key={member.id}>
              <FlippingCard
                frontImage={member.frontImage}
                frontName={member.frontName}
                frontTitle={member.frontTitle}
                backText={member.backText}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BOD;
