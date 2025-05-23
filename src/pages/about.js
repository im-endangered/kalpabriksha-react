import React, { useState } from "react";
import Navbar from "../components/navbar";
import HeaderSeparator from "../components/HeaderSeparator";
import Footer from "../components/footer";
import "../assets/styles/about.css";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import FlippingCard from '../components/FlippingCard';


import nitamImage from '../assets/images/team/nitam.png';
import pankajImage from '../assets/images/team/pankaj.png';
import rejinImage from '../assets/images/team/REjin.jpg';

const About = () => {
  const [flippedCardIndex, setFlippedCardIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedCardIndex(flippedCardIndex === index ? null : index);
  };

  const navigate = useNavigate(); // Initialize useNavigate

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
      {/* Navbar */}
      <Navbar />

      {/* Header Separator */}
      <HeaderSeparator
        title="About Us"
        breadcrumb={[{ name: "Home", link: "/" }, { name: "About Us" }]}
      />

      {/* About Us Section */}
      <section className="about-us">
        <div className="container">
          <div className="row">
            <div className="col-md-6 about-text">
              <h2>About Kalpabriksha</h2>
              <p>
                Kalpabriksha is a development platform that aims to provide growth and support to youth in Nepalese societies through various traditional as well as experimental initiatives. We come up with different plans and programs that promote the emotional, intellectual, and social growth of students and the community they live in. Embracing the principle of equity, inclusion, and youth innovation, this platform envisions becoming a change that makes a difference and stands for a cause. We focus on collecting youth voices on different communal issues and working together to achieve collective success. Kalpabriksha connects bright Nepalese students from all over the country to collaborate on projects that spark a positive change in their community and in the larger scope, the country itself.
              </p>
              <p>
                The platform was established by three Nepalese students pursuing higher education in three different countries with one common goal, youth upliftment. Frustrated by the lack of opportunities there are for visionary youths in the country, we initiated the concept of Kalpabriksha as a Stage where every talent gets the attention and the care it deserves. There are a lot of programs currently being organized on various scales and scopes and other programs are being planned for the near future.
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

      {/* Mission and Vision Section */}
      <section className="mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <ul>
            <li>Providing mentorship programs and educational resources that connect experienced professionals with young people to provide guidance, support, and to empower youth.</li>
            <li>Collaborating with schools and community organizations to create safe and inclusive space for young people.</li>
            <li>Providing youths with workshops and training sessions on essential skills such as communication, leadership, and problem-solving.</li>
            <li>Advocating for policies and initiatives that address the needs and rights of young individuals.</li>
            <li>Creating opportunities for young people to engage in community service and make a social impact.</li>
            <li>Developing comprehensive educational programs that cover various areas of personal and professional development.</li>
          </ul>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            Creating a supportive environment where youth can thrive and reach their full potential, ensuring opportunities for their voices to be heard, inspiring and guiding them to become leaders and changemakers in their communities, and building a network of support systems to help them overcome challenges.
          </p>
        </div>
      </section>
      {/* Meet the Co-founders Section */}
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
          <button
            className="btn btn-primary"
            onClick={() => navigate('/bod')}
          >
            Board of Directors
          </button>
        </div>
      </section>


      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
