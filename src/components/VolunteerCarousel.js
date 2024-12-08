import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/styles/testimonial.css";

const testimonials = [
  {
    text: "Kalpabriksha is a great youth platform which has inspired me become the cause of the change. My experience with the entire team has been joyous and fruitful. Being a victim of cyber abuse myself, my primary motivation for joining Kalpabriksha was to spread awareness about cybercrimes and their consequences. For that matter, I contributed as a content writer. Along with it, I got to learn lots of things about many sensitive topics that I might have not understood fully otherwise. As an introvert, I had the habit of panicking while being around people. Kalpabriksha provided me a chance to connect with people and work outside my comfort zone. In some ways, the zoom meetings, sessions, and discussions have also allowed me to be open and speak my mind. Seeing other team members joining hands for the same cause is even more encouraging.",
    author: "Asmita Poudel",
  },
  {
    text: "“From introducing myself in the first-ever kalpabriksha meeting to celebrating the success of our sessions with momos, it has been an incredible journey. I am grateful to have met the most amazing people along the way. And, being a part of a community that shares a common vision to be a changemaker has been truly empowering. Ideas would've meant nothing without the deligence to transform them into actions. And, witnessing the impact of our work, however minute it might be, is one of the proudest moments of my life. I hope this change continues long into the future. Change: Because we can and we will (together).PS: kalpabriksha breaks stereotypes. Learning can be fun.”",
    author: "Puja Dhakal",
  },
  {
    text: "Working with kalpabriksha was indeed one of the best decisions I've made this year. I have felt a lot of different emotions during my journey with kalpabriksha till date. I enjoyed a lot, I laughed a lot and even panicked sometimes. Maybe while working with wonderful people we sometimes just get nervous for nothing. I got a lot of professional tips and lessons which will further help in my future. I got to know a few more amazing people whom I might remember for the rest of my life. With hardships comes joy. I might not have related this sentence before but after my first session in school I realized that it is indeed the case. At last, I just want to thank team kalpabriksha for all your love and effort to bring the change we all want",
    author: "Dinisha Baniya",
  },
  {
    text: "The journey of volunteering with Kalpabriksha has been electrifying and refreshing. Being with a team with so much positive synergy and optimism is always great. I am looking forward to excelling and growing with Kalpabriksha on this journey.",
    author: "Rahul Bisunkhe",
  },
];

const VolunteerCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonial-carousel">
      <h3>What Our Volunteers Say</h3>
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

export default VolunteerCarousel;
