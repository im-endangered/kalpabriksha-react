import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/navbar";
import HeaderSeparator from "../components/HeaderSeparator";
import Footer from "../components/footer";
import galleryData from "../data/gallery.json";
import "../assets/styles/gallery.css";

const Gallery = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const [filteredImages, setFilteredImages] = useState(galleryData);

  const uniqueTags = ["All", ...new Set(galleryData.flatMap(img => img.tags))];

  useEffect(() => {
    if (selectedTag === "All") {
      setFilteredImages(galleryData);
    } else {
      setFilteredImages(
        galleryData.filter(img => img.tags.includes(selectedTag))
      );
    }
  }, [selectedTag]);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  const prevImage = () =>
    setCurrentImageIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );

  return (
    <div>
      <Helmet>
        <title>Gallery | Kalpabriksha Nepal</title>
        <meta
          name="description"
          content="Browse our gallery to explore Kalpabriksha Nepal's events, workshops, and impactful moments in the community."
        />
        <meta
          name="keywords"
          content="Gallery, Kalpabriksha, Nepal, events, photos, mental health, education, youth, NGO activities"
        />
      </Helmet>

      <Navbar />
      <HeaderSeparator
        title="Our Gallery"
        breadcrumb={[{ name: "Home", link: "/" }, { name: "Gallery" }]}
      />

      {/* Tag Filters */}
      <div className="gallery-tags">
        {uniqueTags.map((tag, idx) => (
          <button
            key={idx}
            className={`tag-button ${selectedTag === tag ? "active" : ""}`}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="gallery-container">
        <div className="gallery-grid">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => openLightbox(index)}
            >
              <img
                src={require(`../assets/images/events/${image.filename}`)}
                alt={image.alt}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox">
          <button className="close-btn" onClick={closeLightbox}>
            &times;
          </button>
          <button className="prev-btn" onClick={prevImage}>
            &larr;
          </button>
          <img
            src={require(`../assets/images/events/${filteredImages[currentImageIndex].filename}`)}
            alt={filteredImages[currentImageIndex].alt}
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
