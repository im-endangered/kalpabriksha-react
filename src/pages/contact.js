import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/navbar";
import HeaderSeparator from "../components/HeaderSeparator";
import Footer from "../components/footer";
import "../assets/styles/contactus.css";

const ContactUs = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Us | Kalpabriksha Nepal</title>
        <meta
          name="description"
          content="Reach out to Kalpabriksha Nepal. We're here to answer your questions, support your involvement, and provide more information about our mission."
        />
        <meta
          name="keywords"
          content="Contact, Kalpabriksha, Nepal, NGO, reach us, support, connect, mental health, youth, change"
        />
      </Helmet>

      <Navbar />
      <HeaderSeparator
        title="Contact Us"
        breadcrumb={[{ name: "Home", link: "/" }, { name: "Contact Us" }]}
      />
      <div className="contact-map">
        <iframe
          title="Kalpabriksha Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28287.646339454175!2d85.31166527658152!3d27.59490015165359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb16e96499a271%3A0xe67370cfd7c338d4!2sChapagaun%2044700%2C%20Nepal!5e0!3m2!1sen!2sin!4v1676041733289!5m2!1sen!2sin"
          height="450"
          style={{ border: 0, width: "70%" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="contact-form-container">
        <iframe
          title="Contact Form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSfa9ot0hlebDyLZcxPz4f9XUgvxP4c3z3I9_YdmV4IStO-uEQ/viewform?embedded=true"
          width="100%"
          height="500"
          allowFullScreen=""
        >
          Loading…
        </iframe>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
