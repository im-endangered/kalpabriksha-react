import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/navbar";
import HeaderSeparator from "../components/HeaderSeparator";
import Footer from "../components/footer";
import "../assets/styles/faq.css";

const FAQ = () => {
  const faqs = [
    {
      question: "I'm gonna ask you this one time, where is Kalpabriksha?",
      answer: "Our head office is located at Godawari -13, Lalitpur",
    },
    {
      question: "I'll do you one better, who's Kalpabriksha?",
      answer:
        "Kalpabriksha is a youth-led development platform rooted in Nepal, built by and for young changemakers. We are a community of students, creatives, and leaders working together to promote emotional, social, and intellectual growth — in ourselves and in our communities. We stand for equity, inclusion, and innovation. Whether it's through traditional values or experimental ideas, we believe in giving young people the space, support, and inspiration to create impact — not someday, but today.",
    },
    {
      question: "Why is Kalpabriksha?",
      answer:
        "Because, why not? But seriously, because we saw the gap. Because too many youths in Nepal lack access to platforms that truly nurture their emotional, social, and intellectual potential. Kalpabriksha exists to fill that gap — to grow a culture of collaboration, creativity, and purpose. We're here because the next generation deserves more than just a future — they deserve the power to shape it.",
    },
    {
      question: "How can I be a part of Kalpabriksha?",
      answer: (
        <>
          Please navigate to{" "}
          <a href="/membership" style={{ textDecoration: "underline" }}>
            Become a Member Section
          </a>{" "}
          for a detailed guide and process.
        </>
      ),
    },
    {
      question: "What are the programs conducted by Kalpabriksha?",
      answer:
        "Some of our major programs and events include Yuwantar (youth carnival), Gunjan (youth expression event), Change Because We Can (a workshop for school students), and History: Gaze at The Maze (Workshop on Nepalese History). We also conduct various youth development seminars.",
    },
    {
      question: "What is “Change: Because We Can?”",
      answer:
        "“Change: Because We Can” is the flagship program of Kalpabriksha. It introduces school students to essential concepts like Mental Health, Youth and the Internet, the LGBTQA+ community, Harassment and Abuse, Toxic Masculinity, and Gender Equality through interactive, outdoor learning methods.",
    },
    {
      question: "Where can I ask questions that are not mentioned in the FAQs?",
      answer:
        "You can contact us anytime via social media, email, or our contact number.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>FAQs – Kalpabriksha</title>
        <meta
          name="description"
          content="Frequently Asked Questions about Kalpabriksha – who we are, what we do, and how you can get involved."
        />
        <meta name="keywords" content="Kalpabriksha, FAQs, youth platform, Nepal youth, programs, membership, change" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navbar />
      <HeaderSeparator
        title="FAQs"
        breadcrumb={[{ name: "Home", link: "/" }, { name: "FAQs" }]}
      />

      <section className="faq-container" aria-labelledby="faq-header">
        <h1 id="faq-header" className="faq-header">
          Frequently Asked Questions
        </h1>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <article
                key={index}
                className={`faq-item ${isOpen ? "active" : ""}`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                >
                  <h2>{faq.question}</h2>
                  <span>{isOpen ? "-" : "+"}</span>
                </button>

                {isOpen && (
                  <div id={answerId} className="faq-answer">
                    {typeof faq.answer === "string" ? (
                      <p>{faq.answer}</p>
                    ) : (
                      <div className="faq-answer-content">{faq.answer}</div>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default FAQ;
