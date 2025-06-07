import React, { useState } from "react";
import Navbar from "../components/navbar";
import HeaderSeparator from "../components/HeaderSeparator";
import Footer from "../components/footer";
import "../assets/styles/faq.css";

const FAQ = () => {
  // Array of FAQs
  const faqs = [
    {
      question: "I'm gonna ask you this one time, where is Kalpabriksha?",
      answer:
        "Our head office is located at Godawari -13, Lalitpur",
    },
    {
      question: "I'll do you one better, who's Kalpabriksha?",
      answer:
        "Kalpabriksha is a youth-led development platform rooted in Nepal, built by and for young changemakers. We are a community of students, creatives, and leaders working together to promote emotional, social, and intellectual growth — in ourselves and in our communities. We stand for equity, inclusion, and innovation. Whether it's through traditional values or experimental ideas, we believe in giving young people the space, support, and inspiration to create impact — not someday, but today.",
    },
    {
      question: "Why is Kalpabriksha?",
      answer:
        "Because, why not? \n But seriously, because we saw the gap. Because too many youths in Nepal lack access to platforms that truly nurture their emotional, social, and intellectual potential. Kalpabriksha exists to fill that gap — to grow a culture of collaboration, creativity, and purpose. We're here because the next generation deserves more than just a future — they deserve the power to shape it.",
    },
    {
      question: "How can I be a part of Kalpabriksha?",
      answer:
        "Please navigate to About > Become a Member for detailed guide and process.",
    },
    {
      question: "What are the programs conducted by Kalpabriksha?",
      answer:
        "Some of our major programs and event include Yuwantar (youth carnival), Gunjan (youth expression event) Change Because We Can (a workshop for school students), and History: Gaze at The Maze (Workshop on Nepalese History). Apart from this, we also conduct events and seminars that help in the development of youth",
    },
    {
      question: "What is “Change: Because We Can?”",
      answer:
        "“Change: Because We Can” is the flagship program of Kalpabriksha. In this program, we reach out to different schools of the country and teach students the concept of Mental Health, Youth and the Internet, the LGBTQA+ community, Harassment and Abuse faced by youth, Toxic Masculinity, and Gender Equality. We use interactive and outdoor learning methods to interact with students and make them understand the aforementioned sensitive issues in a fun yet impactful way.",
    },
    {
      question: "Where can I ask questions where are not mentioned in the FAQs?",
      answer:
        "You can contact us anytime via social media, via email or via our contact number. ",
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
