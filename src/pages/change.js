import React from "react";
import Navbar from "../components/navbar";
import HeaderSeparator from "../components/HeaderSeparator";
import Footer from "../components/footer";
import Mission from "./mission.js";
import SchoolCarousel from "../components/SchoolCarousel";
import TestimonialCarousel from "../components/TestimonialCarousel";
import VolunteerCarousel from "../components/VolunteerCarousel.js";
import ProgramDirector from "../components/ProgramDirector";
import Achievements from "../components/Achievements";
import "../assets/styles/change.css";

const Change = () => {
  return (
    <div>
      <Navbar />
      <HeaderSeparator
        title="Change: Because We Can"
        breadcrumb={[{ name: "Home", link: "/" }, { name: "Change: Because We Can" }]}
      />
      <SchoolCarousel />
      <Mission />
      <TestimonialCarousel />
      <VolunteerCarousel />      
      <ProgramDirector />
      <Achievements />
      <Footer />
    </div>
  );
};

export default Change;
