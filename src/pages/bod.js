import React from "react";
import Navbar from "../components/navbar";
import HeaderSeparator from "../components/HeaderSeparator";
import FlippingCard from "../components/FlippingCard";
import Footer from "../components/footer";
import "../assets/styles/bod.css";

import nitamImage from '../assets/images/team/nitam.png';
import monikaImage from "../assets/images/team/monika.png";
import pankajImage from "../assets/images/team/pankaj.png";
// import abhinabImage from "../assets/images/team/abhinab.png";
// import shekharImage from "../assets/images/team/shekhar.jpg";
// import vijayaImage from "../assets/images/team/vijaya.png";
// import ronikImage from "../assets/images/team/ronik.jpeg";
// import ashleshaImage from "../assets/images/team/ashlesha.png";
// import siddhantImage from "../assets/images/team/siddhant.jpg";
// import nirojImage from "../assets/images/team/niroj.png";
// import shrisnaImage from "../assets/images/team/shrisna.jpeg";
// import sujayImage from "../assets/images/team/sujay.png";
// import pratikImage from "../assets/images/team/pratik.jpg";

const BOD = () => {
  const teamMembers = [
    {
      id: 1,
      frontImage: nitamImage,
      frontName: "Nitamraj Poudel",
      frontTitle: "President",
      backText: (
        <>
          <span className="back-text">Nitamraj Poudel</span>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/nitamraj-poudel/"
              target="_blank"
              rel="noopener noreferrer"
              className="icons linkedin"
            >
              <div>
                <img
                  src="https://img.icons8.com/?size=100&id=8808&format=png&color=FFFFFF"
                  alt="LinkedIn Icon"
                />
              </div>
              <span>LinkedIn</span>
            </a>

            <a
              href="mailto:nitam@kalpabriksha.org.np"
              target="_blank"
              rel="noopener noreferrer"
              className="icons email"
            >
              <div>
                <img
                  src="https://img.icons8.com/?size=100&id=OumT4lIcOllS&format=png&color=000000"
                  alt="Email Icon"
                />
              </div>
              <span>Email</span>
            </a>
          </div>
        </>
      ),
    },
    {
      id: 2,
      frontImage: monikaImage,
      frontName: "Monika Shrestha",
      frontTitle: "Vice-President",
      backText: (
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/monika-shrestha/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/monicashrestha83/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      ),
    },
    {
      id: 3,
      frontImage: pankajImage,
      frontName: "Pankaj Bhattarai",
      frontTitle: "General Secretary",
      backText: (
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/pankaj-bhattarai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/im.endangered/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      ),
    },
    // Add the remaining team members similarly
  ];

  return (
    <div>
      <Navbar />
      <HeaderSeparator
        title="Board of Directors"
        breadcrumb={[
          { name: "Home", link: "/" },
          { name: "Board of Directors" },
        ]}
      />
      <div className="bod-container container">
        <h3 className="bod-heading">
          Meet the executive team behind every Kalpabriksha operation.
        </h3>
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
