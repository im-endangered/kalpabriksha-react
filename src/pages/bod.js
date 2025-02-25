import React, { useState } from "react";
import Navbar from "../components/navbar";
import HeaderSeparator from "../components/HeaderSeparator";
import FlippingCard from "../components/FlippingCard";
import Footer from "../components/footer";
import "../assets/styles/bod.css";
import LocomotiveScroll from "locomotive-scroll";

import nitamImage from '../assets/images/team/nitam.png';
import monikaImage from "../assets/images/team/monika.png";
import pankajImage from "../assets/images/team/pankaj.png";
import abhinabImage from "../assets/images/team/abhinab.png";
import shekharImage from "../assets/images/team/shekhar.jpg";
import vijayaImage from "../assets/images/team/vijaya.png";
import ronikImage from "../assets/images/team/ronik.jpeg";
import ashleshaImage from "../assets/images/team/ashlesha.png";
import siddhantImage from "../assets/images/team/siddhant.jpg";
import nirojImage from "../assets/images/team/niroj.png";
import shrisnaImage from "../assets/images/team/shrisna.jpeg";
import sujayImage from "../assets/images/team/sujay.png";
import pratikImage from "../assets/images/team/pratik.jpg";

const BOD = () => {
  // eslint-disable-next-line
  const locomotiveScroll = new LocomotiveScroll();

  const [flippedCardIndex, setFlippedCardIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedCardIndex(flippedCardIndex === index ? null : index);
  };

  const teamMembers = [
    {
      id: 1,
      frontImage: nitamImage,
      frontName: "Nitamraj Poudel",
      frontTitle: "President",
      backText: (
        <>
          <span className="back-text">Nitamraj Poudel</span>
          {/* <span className="back-text">"Quote"</span> */}
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
        <>
          <span className="back-text">Monika Shrestha</span>
          {/* <span className="back-text">"Quote"</span> */}
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/monikashrestha/"
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
              href="mailto:monika@kalpabriksha.org.np"
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
      id: 3,
      frontImage: pankajImage,
      frontName: "Pankaj Bhattarai",
      frontTitle: "General Secretary",
      backText: (
        <>
          <span className="back-text">Pankaj Bhattarai</span>
          {/* <span className="back-text">"Quote"</span> */}
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/pankajbhattarai/"
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
              href="mailto:panjak@kalpabriksha.org.np"
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
      id: 4,
      frontImage: abhinabImage,
      frontName: "Abhinab Khanal",
      frontTitle: "Secretary",
      backText: (
        <>
          <span className="back-text">Abhinab Khanal</span>
          {/* <span className="back-text">"Quote"</span> */}
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/abhinab-khanal-336059257/"
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
              href="mailto:abhinab@kalpabriksha.org.np"
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
      id: 5,
      frontImage: shekharImage,
      frontName: "Sekhar Thapa",
      frontTitle: "Treasurer",
      backText: (
        <>
          <span className="back-text">Shekhar Thapa</span>
          {/* <span className="back-text">"Quote"</span> */}
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/shekhar-thapa-7810732aa/"
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
              href="mailto:shekhar@kalpabriksha.org.np"
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
      id: 6,
      frontImage: vijayaImage,
      frontName: "Vijaya Sharma",
      frontTitle: "Executive",
      backText: (
        <>
          <span className="back-text">Vijaya Lakshmi Sharma</span>
          {/* <span className="back-text">"Quote"</span> */}
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/vijaya-laxmi-sharma/"
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
              href="mailto:vijaya@kalpabriksha.org.np"
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
      id: 7,
      frontImage: ronikImage,
      frontName: "Ronik Basnet",
      frontTitle: "Executive",
      backText: (
        <>
          <span className="back-text">Ronik Basnet</span>
          {/* <span className="back-text">"Quote"</span> */}
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/ronik-basnet-69b327217/"
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
              href="mailto:ronik@kalpabriksha.org.np"
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
      id: 8,
      frontImage: ashleshaImage,
      frontName: "Ashlesha Shrestha",
      frontTitle: "Executive",
      backText: (
        <>
          <span className="back-text">Ashlesha Shrestha</span>
          {/* <span className="back-text">"Quote"</span> */}
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/shrestha-ashlesha/"
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
              href="mailto:ashlesha@kalpabriksha.org.np"
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
      id: 9,
      frontImage: siddhantImage,
      frontName: "Siddhant Silwal",
      frontTitle: "Executive",
      backText: (
        <>
          <span className="back-text">Siddhant Silwal</span>
          {/* <span className="back-text">"Quote"</span> */}
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/siddhant-silwal-91a00b24b/"
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
              href="mailto:siddhant@kalpabriksha.org.np"
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
      id: 10,
      frontImage: nirojImage,
      frontName: "Niroj Neupane",
      frontTitle: "Executive",
      backText: (
        <>
          <span className="back-text">Niroj Neupane</span>
          <span className="back-text">"Shaktimaan Shaktimaan"</span>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/nirojneupane/"
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
              href="mailto:niroj@kalpabriksha.org.np"
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
      id: 11,
      frontImage: shrisnaImage,
      frontName: "Shrishna Thapa",
      frontTitle: "Executive",
      backText: (
        <>
          <span className="back-text">Shrishna Thapa</span>
          {/* <span className="back-text">"Quote"</span> */}
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/shrisna-thapa-893947264/"
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
              href="mailto:shrishna@kalpabriksha.org.np"
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
      id: 12,
      frontImage: sujayImage,
      frontName: "Sujay Kumar Pal",
      frontTitle: "Executive",
      backText: (
        <>
          <span className="back-text">Sujay Kumar Pal</span>
          {/* <span className="back-text">"Quote"</span> */}
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/pal-sujay-66171228a/"
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
              href="mailto:sujay@kalpabriksha.org.np"
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
      id: 13,
      frontImage: pratikImage,
      frontName: "Pratik Luitel",
      frontTitle: "Executive",
      backText: (
        <>
          <span className="back-text">Pratik Luitel</span>
          {/* <span className="back-text">"Quote"</span> */}
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/pratik-luitel/"
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
              href="mailto:pratik@kalpabriksha.org.np"
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
          {teamMembers.map((member, index) => (
            <div className="col-md-3 col-sm-6 mb-4" key={member.id}>
              <FlippingCard
                frontImage={member.frontImage}
                frontName={member.frontName}
                frontTitle={member.frontTitle}
                backText={member.backText}
                isFlipped={flippedCardIndex === index}
                handleFlip={() => handleFlip(index)}
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
