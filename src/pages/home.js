import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Slider from '../components/slider';
import '../assets/styles/home.css';

function Home() {
  return (
    <div>
      <Navbar />
      <Slider />

      {/* About Us Section */}
      <section className="about-us">
        <div className="container">
          <div className="row">
            <div className="col-md-6 about-text">
              <h2>About Kalpabriksha</h2>
              <p>
                First things first, its <b>Kalpabriksha Nepal</b>, not Kalpabrikshya Nepal, not Kalpavriksha Nepal.
                Kalpabriksha Nepal is a youth-led organization established in 2022 and officially registered as an NGO in
                2024. The platform was established by three Nepalese students pursuing higher education in three
                countries with one common goal: Youth upliftment in Nepalese societies. Frustrated by the lack of
                opportunities for visionary youths in the country, Kalpabriksha was initiated as a place where every youth
                talent gets the attention and care it deserves. Many youths still face harassment, abuse, and violence in
                Nepal while many struggle with mental health issues. Kalpabriksha aims to provide support, guidance, and
                opportunities to those youths and help them adjust to day-to-day life.
              </p>
            </div>
            <div className="col-md-6 support-options">
              <h6>Ways to support us</h6>
              <div className="support-grid">
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSezQb4yRTh7Sr0f7RmvXgQR5N75rCm7qQUGjZVi5Kixn-WI5g/viewform'><div className="support-card">
                  <i className="fas fa-user"></i>
                  <p>Become a Volunteer</p>
                </div></a>
                <div className="support-card">
                  <i className="fas fa-bullhorn"></i>
                  <p>Share about us</p>
                </div>
                <div className="support-card">
                  <i className="fas fa-donate"></i>
                  <a href="/donate"><p>Donate us</p></a>
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

      {/* Objectives, Mission, and Vision Section */}
      <section className="objectives-mission-vision">
        <div className="objectives">
          <h2>Objectives</h2>
          <ul>
            <li>1. To promote intellectual development and establish partnerships between the youth and different classes.</li>
            <li>2. To enhance the skills of the youth and promote youth expression of thoughts, feelings, and experiences.</li>
            <li>3. Conduct programs aimed at improving the mental health status of the youth in Nepalese societies.</li>
            <li>4. Organizing awareness programs to fight against harassment and abuse of youth.</li>
            <li>5. Conduct programs to empower youth and engage them in fighting against social evils.</li>
            <li>6. Collaborate with like-minded organizations to collectively achieve common goals.</li>
            <li>7. Building a network of support systems to help youth overcome challenges and obstacles.</li>
          </ul>
        </div>
        <div className="mission">
          <h2>Our Mission</h2>
          <ul>
            <li>1. Providing mentorship programs and educational resources that connect experienced professionals with youth.</li>
            <li>2. Collaborating with schools and community organizations to create safe and inclusive spaces for youth.</li>
            <li>3. Providing workshops and training sessions on communication, leadership, and problem-solving.</li>
            <li>4. Advocating for policies and initiatives that address the needs and rights of young individuals.</li>
            <li>5. Creating opportunities for youth to engage in community service and make a social impact.</li>
            <li>6. Developing comprehensive educational programs for personal and professional development.</li>
          </ul>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            Creation of a supportive platform where every youth can thrive and reach their full potential, ensuring
            opportunities for their voices to be heard, inspiring and guiding them to become leaders and changemakers in
            their communities, and building a network of support systems to help them overcome challenges.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
