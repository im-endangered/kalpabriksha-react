import React from 'react';
import Slider from 'react-slick';
import '../assets/styles/slider.css';

// Import slider images
import slide1 from '../assets/images/slider/yuwantar.jpg';
import slide2 from '../assets/images/slider/jyotidaya.jpg';
import slide3 from '../assets/images/slider/teamworking.jpg';
import slide4 from '../assets/images/slider/gunjan.jpg';

// Custom Arrow Components
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-next" onClick={onClick}>
      &gt;
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-prev" onClick={onClick}>
      &lt;
    </div>
  );
}

function HomeSlider() {
  const settings = {
    dots: true, // Enable dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: () => <div className="dot" />,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider-item">
          <img src={slide1} alt="Yuwantar" />
          <div className="slider-caption">
            <h3>Yuwantar: First Annual Event</h3>
          </div>
        </div>
        <div className="slider-item">
          <img src={slide2} alt="Jyotidaya" />
          <div className="slider-caption">
            <h3>Change: Because We Can</h3>
          </div>
        </div>
        <div className="slider-item">
          <img src={slide3} alt="Teamworking" />
          <div className="slider-caption">
            <h3>Team Preparation for Yuwantar</h3>
          </div>
        </div>
        <div className="slider-item">
          <img src={slide4} alt="Gunjan" />
          <div className="slider-caption">
            <h3>Gunjan 2.0: Celebrating Together</h3>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default HomeSlider;
