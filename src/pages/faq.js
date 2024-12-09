import React, { useState } from "react";
import Navbar from "../components/navbar";
import HeaderSeparator from "../components/HeaderSeparator";
import Footer from "../components/footer";
import "../assets/styles/faq.css";

const FAQ = () => {
  // Array of FAQs
  const faqs = [
    {
      question: "What is Kalpabriksha?",
      answer:
        "Kalpabriksha is a development platform that supports youth in Nepal through initiatives that promote emotional, intellectual, and social growth.",
    },
    {
      question: "How can I get involved with Kalpabriksha?",
      answer:
        "You can volunteer with us, donate to our campaigns, or participate in our mentorship programs. Reach out to us for more details!",
    },
    {
      question: "Where is Kalpabriksha located?",
      answer: "We are located in Chapagaun, Lalitpur, Nepal. You can find us on Google Maps for precise directions.",
    },
    {
      question: "How can I donate to Kalpabriksha?",
      answer:
        "We accept donations via bank transfers and GoFundMe. Visit our 'Donate Us' page for detailed instructions.",
    },
    {
      question: "What programs does Kalpabriksha offer?",
      answer:
        "Our programs include Change: Because We Can, mentorship initiatives, and skill development workshops for youth in Nepal.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  // Function to toggle FAQ visibility
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <Navbar />
      <HeaderSeparator
        title="FAQs"
        breadcrumb={[{ name: "Home", link: "/" }, { name: "FAQs" }]}
      />
      <div className="faq-container">
        <h2 className="faq-header">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              key={index}
            >
              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <h3>{faq.question}</h3>
                <span>{activeIndex === index ? "-" : "+"}</span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
