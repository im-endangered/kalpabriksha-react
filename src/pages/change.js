import React from "react";
import { Helmet } from "react-helmet";
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
      <Helmet>
        <title>Change: Because We Can | Kalpabriksha</title>
        <meta name="description" content="Change: Because We Can is a Kalpabriksha initiative to educate students from Grade 7 to Bachelor's level on sensitive topics like consent, harassment, LGBTQ+ rights, and more through interactive learning." />
        <meta name="keywords" content="Kalpabriksha, Change Program, consent, harassment, LGBTQ+, mental health, education, Nepal, adolescence, abuse, menstruation, patriarchy, gender equality" />
      </Helmet>

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
