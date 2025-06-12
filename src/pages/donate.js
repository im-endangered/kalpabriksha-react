import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/navbar";
import HeaderSeparator from "../components/HeaderSeparator";
import Footer from "../components/footer";
import "../assets/styles/donateus.css";

import bankImage from "../assets/images/donations/bank.png";
// import gofundme from "../assets/images/donations/gofundme.png";

const DonateUs = () => {
  return (
    <div>
      <Helmet>
        <title>Donate | Kalpabriksha Nepal</title>
        <meta
          name="description"
          content="Support Kalpabriksha Nepal by donating to our cause. Your contributions help fund educational campaigns, mental health awareness programs, and student support activities."
        />
        <meta
          name="keywords"
          content="Donate, Kalpabriksha, Nepal, NGO, non-profit, Change Because We Can, mental health, education, students, youth, donation"
        />
      </Helmet>

      <Navbar />
      <HeaderSeparator
        title="Donate Us"
        breadcrumb={[{ name: "Home", link: "/" }, { name: "Donate Us" }]}
      />

      <div className="donate-container">
        <h3 className="donate-header">
          Do you believe in our cause? Help our campaigns by your donation.
        </h3>

        <div className="donate-options">
          <div className="donate-card">
            <img src={bankImage} alt="Bank Transfer" />
            <p><b>Bank Transfer</b></p>
            <p>Account Number: <strong>00401040251617</strong></p>
            <p>Account Name: <strong>Kalpabriksha Nepal</strong></p>
            <p>NIMB Bank</p>
            <p>Pulchok Branch</p>
          </div>

          {/* Uncomment if using GoFundMe
          <div className="donate-card">
            <a
              href="https://www.gofundme.com/f/change-because-we-can"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={gofundme} alt="GoFundMe" />
              <p><b>Go Fund Me</b></p>
              <p>Click to Donate</p>
            </a>
          </div>
          */}
        </div>

        <div className="donate-description">
          <h3>Your donations are used for these meaningful causes:</h3>
          <ul>
            <li>1. Publication of brochures and pamphlets.</li>
            <li>2. Stationery supplies required for "Change: Because We Can" campaign.</li>
            <li>3. Materials needed for mentorship and youth empowerment sessions.</li>
            <li>4. Gifts and prizes for students to encourage interactive learning.</li>
            <li>5. Travel and meal expenses for our volunteer mentors and trainers.</li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DonateUs;
