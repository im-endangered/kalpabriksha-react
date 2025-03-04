import React from 'react';
import Slider from 'react-slick';
import "../assets/styles/carousel.css";
import '../assets/styles/slider.css';

// Import slider images
import slide1 from '../assets/images/slider/yuwantar.jpg';
import slide2 from '../assets/images/slider/jyotidaya.jpg';
import slide3 from '../assets/images/slider/teamworking.jpg';
import slide4 from '../assets/images/slider/gunjan.jpg';
import slide5 from '../assets/images/slider/chitwan.png';
import slide6 from '../assets/images/slider/pratidhwani.png';

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

const programs = [
  {
    image: slide1,
    name: 'Yuwantar',
    caption: 'Yuwantar: First Annual Event'
  },
  {
    image: slide2,
    name: 'Change Because We Can',
    caption: 'Change: Because We Can at Jyotidaya School',
  },
  {
    image: slide3,
    name: 'Team Prep',
    caption: 'Team Preparation for Yuwantar'
  },
  {
    image: slide4,
    name: 'Gunjan: 2.0',
    caption: 'Gunjan 2.0: Celebrating Second Anniversary'
  },
  {
    image: slide5,
    name: 'CBWC at Orchid School, Chitwan',
    caption: 'CBWC at Orchid School, Chitwan',
  },
  {
    image: slide6,
    name: 'Project Pratidhwani',
    caption: 'Project Pratidhwani at Damauli, Tanahun.'
  }
]

function HomeSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {programs.map((program, index) => (
          <div key={index} className="carousel-item">
            <img src={program.image} alt={program.name} className="slider-image" />
            <p className="carousel-caption">{program.caption}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HomeSlider;
