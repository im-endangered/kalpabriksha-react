import React from "react";
import Navbar from "../components/navbar";
import HeaderSeparator from "../components/HeaderSeparator";
import Footer from "../components/footer";
import "../assets/styles/donateus.css";

import bankImage from "../assets/images/donations/bank.png"
import gofundme from "../assets/images/donations/gofundme.png"
const DonateUs = () => {
  return (
    <div>
      <Navbar />
      <HeaderSeparator
        title="Donate Us"
        breadcrumb={[{ name: "Home", link: "/" }, { name: "Donate Us" }]}
      />
      <div className="donate-container">
        <h3 className="donate-header">Do you believe in our cause? Help our campaign by your donation.</h3>
        <div className="donate-options">
          <div className="donate-card">
            <img src={bankImage} alt="Bank Transfer" />
            <p><b>Bank Transfer</b></p>
            <p>Pankaj Bhattarai</p>
            <p>Account No: 11405080050913</p>
            <p>NIMB Bank</p>
          </div>
          <div className="donate-card">
            <a href="https://www.gofundme.com/f/change-because-we-can" target="_blank" rel="noopener noreferrer">
              <img src={gofundme} alt="GoFundMe" />
              <p><b>Go Fund Me</b></p>
              <p>Click to Donate</p>
            </a>
          </div>
        </div>
        <div className="donate-description">
          <h3>Your donations are used for these meaningful causes:</h3>
          <ul>
            <li>1. Publication of brochures and pamphlets.</li>
            <li>2. Stationery supplies required for Change:Because we Can Campaign.</li>
            <li>3. Supplies required for mentorship activities.</li>
            <li>4. Gifts, prizes, and praises for the students to promote effective and interactive learning.</li>
            <li>5. Travel and food expenses for mentors, trainers, and counselors.</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DonateUs;
