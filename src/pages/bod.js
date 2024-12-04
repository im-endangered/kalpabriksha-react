import React from "react";
import Navbar from "../components/navbar";
import HeaderSeparator from "../components/HeaderSeparator";
import FlippingCard from "../components/FlippingCard";
import Footer from "../components/footer";
import "../assets/styles/bod.css";

import nitamImage from '../assets/images/team/nitam.png';
import monikaImage from "../assets/images/team/monika.png"
import pankajImage from "../assets/images/team/pankaj.png"
import abhinabImage from "../assets/images/team/abhinab.png"
import shekharImage from "../assets/images/team/shekhar.jpg"
import vijayaImage from "../assets/images/team/vijaya.png"
import ronikImage from "../assets/images/team/ronik.jpeg"
import ashleshaImage from "../assets/images/team/ashlesha.png"
import siddhantImage from "../assets/images/team/siddhant.jpg"
import nirojImage from "../assets/images/team/niroj.png"
import shrisnaImage from "../assets/images/team/shrisna.jpeg"
import sujayImage from "../assets/images/team/sujay.png"
import pratikImage from "../assets/images/team/pratik.jpg"

const BOD = () => {
  const teamMembers = [
    {
      id: 1,
      frontImage: nitamImage,
      frontName: "Nitamraj Poudel",
      frontTitle: "President",
      backText:
        <div class="social-icons">
          <a href="https://www.facebook.com/nitamrajpoudel" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/_nitamraj_/" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="mailto:nitam@kalpabriksha.org">
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
    {
      id: 3,
      frontImage: pankajImage,
      frontName: "Pankaj Bhattarai",
      frontTitle: "General Secretary",
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
    {
      id: 4,
      frontImage: abhinabImage,
      frontName: "Abhinab Khanal",
      frontTitle: "Secretary",
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
    {
      id: 5,
      frontImage: shekharImage,
      frontName: "Shekhar Thapa",
      frontTitle: "Treasurer",
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
    {
      id: 6,
      frontImage: vijayaImage,
      frontName: "Vijaya Laxmi Sharma",
      frontTitle: "Executive",
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
    {
      id: 7,
      frontImage: ronikImage,
      frontName: "Ronik Basnet",
      frontTitle: "Executive",
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
    {
      id: 8,
      frontImage: ashleshaImage,
      frontName: "Ashlesha Shrestha",
      frontTitle: "Executive",
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
    {
      id: 9,
      frontImage: siddhantImage,
      frontName: "Siddhant Silwal",
      frontTitle: "Executive",
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
    {
      id: 10,
      frontImage: nirojImage,
      frontName: "Niroj Neupane Khatri",
      frontTitle: "Executive",
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
    {
      id: 11,
      frontImage: shrisnaImage,
      frontName: "Shrisna Thapa",
      frontTitle: "Executive",
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
    {
      id: 12,
      frontImage: sujayImage,
      frontName: "Sujay Kumar Pal",
      frontTitle: "Executive",
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
    {
      id: 13,
      frontImage: pratikImage,
      frontName: "Pratik Luitel",
      frontTitle: "Executive",
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
