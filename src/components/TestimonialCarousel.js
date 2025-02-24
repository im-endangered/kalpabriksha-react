import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/styles/testimonial.css";

const testimonials = [
  {
    text: "This program was really fun. Through this program I got a chance to learn many things about LGBTQ, Cyber Bullying etc.",
    author: "Student, Heartland Academy",
  },
  {
    text: "Today's class was very enjoyable, and it was full of fun. I really enjoyed today. You guys are really the superhero.",
    author: "Student, Standard Co Ed School",
  },
  {
    text: "We learned many things. Thank you so much. This will definitely induce some changes in me. You are great!",
    author: "Student, Shahid Dharmabhakta School",
  },
];

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          autoplay: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  

  return (
    <div className="testimonial-carousel">
      <h3>What Our Students Say</h3>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-text">"{testimonial.text}"</p>
            <p className="testimonial-author">- {testimonial.author}</p>
          </div>
        ))}
      </Slider>
      </div>
  );
};

export default TestimonialCarousel;
