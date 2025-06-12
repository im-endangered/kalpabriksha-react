import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from 'react-router-dom';

import Navbar from "../components/navbar";
import HeaderSeparator from "../components/HeaderSeparator";
import Footer from "../components/footer";
import FlippingCard from '../components/FlippingCard';

import "../assets/styles/about.css";

import nitamImage from '../assets/images/team/nitam.png';
import pankajImage from '../assets/images/team/pankaj.png';
import rejinImage from '../assets/images/team/REjin.jpg';

const About = () => {
  const [flippedCardIndex, setFlippedCardIndex] = useState(null);
  const navigate = useNavigate();

  const handleFlip = (index) => {
    setFlippedCardIndex(flippedCardIndex === index ? null : index);
  };

  const cofounders = [
    {
      frontImage: nitamImage,
      frontName: 'Nitamraj Poudel',
      frontTitle: 'Co-founder',
      backText: 'A person with no imagination has no wings',
    },
    {
      frontImage: pankajImage,
      frontName: 'Pankaj Bhattarai',
      frontTitle: 'Co-Founder',
      backText: 'Be the change that you wish to see in the world.',
    },
    {
      frontImage: rejinImage,
      frontName: 'Rejin Nepal',
      frontTitle: 'Co-founder',
      backText: 'The moon will guide you through the night with her brightness, but she will always dwell in the darkness, in order to be seen.',
    },
  ];

  return (
    <div>
      <Helmet>
        <title>About Us | Kalpabriksha Nepal</title>
        <meta name="description" content="Learn about Kalpabriksha Nepal’s mission, vision, and the team behind our efforts to uplift youth in Nepal through education and empowerment." />
        <meta name="keywords" content="About Kalpabriksha, youth organization Nepal, mission vision Kalpabriksha, Nepal NGO youth" />
        <meta property="og:title" content="About Us | Kalpabriksha Nepal" />
        <meta property="og:description" content="Know more about our story, goals, and team behind Kalpabriksha Nepal – empowering youths across Nepal." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kalpabriksha.org.np/about" />
        <meta property="og:image" content="/logo192.png" />
      </Helmet>

      <Navbar />
      <HeaderSeparator title="About Us" breadcrumb={[{ name: "Home", link: "/" }, { name: "About Us" }]} />

      <section className="about-us">
        <div className="container">
          <div className="row">
            <div className="col-md-6 about-text">
              <h2>About Kalpabriksha</h2>
              <p>
                Kalpabriksha is a development platform that aims to provide growth and support to youth in Nepalese societies through various traditional as well as experimental initiatives. We come up with different plans and programs that promote the emotional, intellectual, and social growth of students and the community they live in. Embracing the principle of equity, inclusion, and youth innovation, this platform envisions becoming a change that makes a difference and stands for a cause.
              </p>
              <p>
                The platform was established by three Nepalese students pursuing higher education in three different countries with one common goal: youth upliftment. Frustrated by the lack of opportunities, we initiated Kalpabriksha as a stage where every talent gets the attention and the care it deserves.
              </p>
            </div>
            <div className="col-md-6 support-options">
              <h6>Ways to support us</h6>
              <div className="support-grid">
                <a href='/membership'>
                  <div className="support-card">
                    <i className="fas fa-user"></i>
                    <p>Become a Member</p>
                  </div>
                </a>
                <div className="support-card">
                  <i className="fas fa-bullhorn"></i>
                  <p>Share about us</p>
                </div>
                <div className="support-card">
                  <i className="fas fa-donate"></i>
                  <p>Donate us</p>
                </div>
                <div className="support-card">
                  <i className="fas fa-hands-helping"></i>
                  <p>Help Someone</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <ul>
            <li>Providing mentorship and educational resources to empower youth.</li>
            <li>Partnering with schools and community groups for safe, inclusive environments.</li>
            <li>Offering leadership and life skills training.</li>
            <li>Advocating for youth-centric policies and rights.</li>
            <li>Engaging youth in social service projects.</li>
            <li>Developing holistic educational programs for personal/professional growth.</li>
          </ul>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            Creating a supportive environment where youth thrive, are heard, become leaders, and overcome societal challenges through collaboration and opportunity.
          </p>
        </div>
      </section>

      <section className="cofounders-section">
        <h2>Meet our Co-founders</h2>
        <p>Meet the talented individuals who bring our vision to life.</p>
        <div className="cofounders-grid">
          {cofounders.map((cofounder, index) => (
            <FlippingCard
              key={index}
              frontImage={cofounder.frontImage}
              frontName={cofounder.frontName}
              frontTitle={cofounder.frontTitle}
              backText={cofounder.backText}
              isFlipped={flippedCardIndex === index}
              handleFlip={() => handleFlip(index)}
            />
          ))}
        </div>
        <div className="text-center mt-4">
          <button className="btn btn-primary" onClick={() => navigate('/bod')}>
            Board of Directors
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
