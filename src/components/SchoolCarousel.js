import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/styles/carousel.css";


import school1 from "../assets/images/events/cbwc-2.jpg"
import school2 from "../assets/images/events/cbwc-3.jpg"
import school3 from "../assets/images/events/cbwc-4.jpg"

const schoolData = [
  { image: school1, name: "Heartland Academy" },
  { image: school2, name: "Standard Co Ed School" },
  { image: school3, name: "Shahid Dharmabhakta School" },
];

const SchoolCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="school-carousel">
      <Slider {...settings}>
        {schoolData.map((school, index) => (
          <div key={index} className="carousel-item">
            <img src={school.image} alt={school.name} className="carousel-image" />
            <p className="carousel-caption">Change: Because We Can - {school.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SchoolCarousel;
