import React, { useState } from "react";
import Navbar from "../components/navbar";
import HeaderSeparator from "../components/HeaderSeparator";
import Footer from "../components/footer";
import "../assets/styles/gallery.css";


import image2 from '../assets/images/events/2.png';
import image3 from '../assets/images/events/3.png';
import image4 from '../assets/images/events/4.jpg';
import image1 from '../assets/images/events/1.png';
import image5 from '../assets/images/events/5.jpg';
import image6 from '../assets/images/events/6.jpg';
import image7 from '../assets/images/events/7.jpg';
import image8 from '../assets/images/events/8.jpg';
import image9 from '../assets/images/events/9.jpg';
import image10 from '../assets/images/events/10.jpg';
import image11 from '../assets/images/events/11.jpg';
import image12 from '../assets/images/events/12.jpg';


const galleryImages = [
    { src: image1, alt: 'Image 1' },
    { src: image2, alt: 'Image 2' },
    { src: image3, alt: 'Image 3' },
    { src: image4, alt: 'Image 4' },
    { src: image5, alt: 'Image 5' },
    { src: image6, alt: 'Image 6' },
    { src: image7, alt: 'Image 7' },
    { src: image8, alt: 'Image 8' },
    { src: image9, alt: 'Image 9' },
    { src: image10, alt: 'Image 10' },
    { src: image11, alt: 'Image 11' },
    { src: image12, alt: 'Image 12' },
  ];

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  return (
    <div>
      <Navbar />
      <HeaderSeparator
        title="Our Gallery"
        breadcrumb={[{ name: "Home", link: "/" }, { name: "Gallery" }]}
      />
      <div className="gallery-container">
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => openLightbox(index)}
            >
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div className="lightbox">
          <button className="close-btn" onClick={closeLightbox}>
            &times;
          </button>
          <button className="prev-btn" onClick={prevImage}>
            &larr;
          </button>
          <img
            src={galleryImages[currentImage].src}
            alt={galleryImages[currentImage].alt}
            className="lightbox-image"
          />
          <button className="next-btn" onClick={nextImage}>
            &rarr;
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
