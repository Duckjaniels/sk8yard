import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import heroImage from "../assets/hero_gallery.png";
import Footer from "../components/Footer";
import "./GalleryStyles.css";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import Group1_1 from "../assets/gallery//gallery_page/group1/group1_1.webp";
import Group1_2 from "../assets/gallery//gallery_page/group1/group1_2.webp";
import Group1_3 from "../assets/gallery//gallery_page/group1/group1_3.webp";
import Group2_1 from "../assets/gallery//gallery_page/group2/group2_1.webp";
import Group2_2 from "../assets/gallery//gallery_page/group2/group2_2.webp";
import Group2_3 from "../assets/gallery//gallery_page/group2/group2_3.webp";
import Group3_1 from "../assets/gallery//gallery_page/group3/group3_1.webp";
import Group3_2 from "../assets/gallery//gallery_page/group3/group3_2.webp";
import Group4_1 from "../assets/gallery//gallery_page/group4/group4_1.webp";
import Group4_2 from "../assets/gallery//gallery_page/group4/group4_2.webp";
import Group4_3 from "../assets/gallery//gallery_page/group4/group4_3.webp";
import Group5_1 from "../assets/gallery//gallery_page/group5/group5_1.webp";
import Group5_2 from "../assets/gallery//gallery_page/group5/group5_2.webp";
import Group5_3 from "../assets/gallery//gallery_page/group5/group5_3.webp";
import Group6_1 from "../assets/gallery//gallery_page/group6/group6_1.webp";
import Group6_2 from "../assets/gallery//gallery_page/group6/group6_2.webp";
import Group7_1 from "../assets/gallery//gallery_page/group7/group7_1.webp";
import Group7_2 from "../assets/gallery//gallery_page/group7/group7_2.webp";
import Group7_3 from "../assets/gallery//gallery_page/group7/group7_3.webp";
import Group8_1 from "../assets/gallery//gallery_page/group8/group8_1.webp";
import Group8_2 from "../assets/gallery//gallery_page/group8/group8_2.webp";
import Group8_3 from "../assets/gallery//gallery_page/group8/group8_3.webp";
import Group9_1 from "../assets/gallery//gallery_page/group9/group9_1.webp";
import Group9_2 from "../assets/gallery//gallery_page/group9/group9_2.webp";
import Group10_1 from "../assets/gallery//gallery_page/group10/group10_1.webp";
import Group10_2 from "../assets/gallery//gallery_page/group10/group10_2.webp";
import Group10_3 from "../assets/gallery//gallery_page/group10/group10_3.webp";
import React, { useState } from "react";

function Gallery() {
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const [selectedThumbnail, setSelectedThumbnail] = useState(null);

  const openFullScreen = (imageSrc) => {
    setFullScreenImage(imageSrc);
  };

  const closeFullScreen = () => {
    setFullScreenImage(null);
    setSelectedThumbnail(null); // Resetowanie stanu po zamknięciu pełnoekranowego widoku
  };

  const handleThumbnailClick = (imageSrc) => {
    setSelectedThumbnail(imageSrc);
    openFullScreen(imageSrc);
  };
  const handlePrev = () => {
    const currentIndex = images.indexOf(selectedThumbnail);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedThumbnail(images[prevIndex]);
    setFullScreenImage(images[prevIndex]);
  };

  const handleNext = () => {
    const currentIndex = images.indexOf(selectedThumbnail);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedThumbnail(images[nextIndex]);
    setFullScreenImage(images[nextIndex]);
  };
  const images = [
    // Lista wszystkich zdjęć
    Group1_1,
    Group1_2,
    Group1_3,
    Group2_1,
    Group2_2,
    Group2_3,
    Group3_1,
    Group3_2,
    Group4_1,
    Group4_2,
    Group4_3,
    Group5_1,
    Group5_2,
    Group5_3,
    Group6_1,
    Group6_2,
    Group7_1,
    Group7_2,
    Group7_3,
    Group8_1,
    Group8_2,
    Group8_3,
    Group9_1,
    Group9_2,
    Group10_1,
    Group10_2,
    Group10_3,
  ];
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={heroImage} title="Galeria" />
      <div className="gallery_container">
        <div className="gallery_card-left">
          <img
            className="gallery_img-big"
            src={Group1_1}
            alt="Planowanie"
            onClick={() => handleThumbnailClick(Group1_1)}
          />
          <div className="gallery_small_images">
            <img
              className="gallery_img-small"
              src={Group1_2}
              alt="Planowanie"
              onClick={() => handleThumbnailClick(Group1_2)}
            />
            <img
              className="gallery_img-small"
              src={Group1_3}
              alt="Planowanie"
              onClick={() => handleThumbnailClick(Group1_3)}
            />
          </div>
        </div>
        <div className="gallery_card-right">
          <div className="gallery_small_images">
            <img
              className="gallery_img-small"
              src={Group2_1}
              alt="Planowanie"
              onClick={() => handleThumbnailClick(Group2_1)}
            />
            <img
              className="gallery_img-small"
              src={Group2_2}
              alt="Planowanie"
              onClick={() => handleThumbnailClick(Group2_2)}
            />
          </div>
          <img
            className="gallery_img-big"
            src={Group2_3}
            alt="Planowanie"
            onClick={() => handleThumbnailClick(Group2_3)}
          />
        </div>

        <div className="gallery_card-mid">
          <img
            className="gallery_img-medium"
            src={Group3_1}
            alt="Planowanie"
            onClick={() => handleThumbnailClick(Group3_1)}
          />
          <img
            className="gallery_img-medium"
            src={Group3_2}
            alt="Planowanie"
            onClick={() => handleThumbnailClick(Group3_2)}
          />
        </div>
        <div className="gallery_card-right">
          <div className="gallery_small_images">
            <img
              className="gallery_img-small"
              src={Group4_1}
              alt="Planowanie"
              onClick={() => handleThumbnailClick(Group4_1)}
            />
            <img
              className="gallery_img-small"
              src={Group4_2}
              alt="Planowanie"
              onClick={() => handleThumbnailClick(Group4_2)}
            />
          </div>
          <img
            className="gallery_img-big"
            src={Group4_3}
            alt="Planowanie"
            onClick={() => handleThumbnailClick(Group4_3)}
          />
        </div>
        <div className="gallery_card-left">
          <img
            className="gallery_img-big"
            src={Group5_1}
            alt="Planowanie"
            onClick={() => handleThumbnailClick(Group5_1)}
          />
          <div className="gallery_small_images">
            <img
              className="gallery_img-small"
              src={Group5_2}
              alt="Planowanie"
              onClick={() => handleThumbnailClick(Group5_2)}
            />
            <img
              className="gallery_img-small"
              src={Group5_3}
              alt="Planowanie"
              onClick={() => handleThumbnailClick(Group5_3)}
            />
          </div>
        </div>
        <div className="gallery_card-mid">
          <img
            className="gallery_img-medium"
            src={Group6_1}
            alt="Planowanie"
            onClick={() => handleThumbnailClick(Group6_1)}
          />
          <img
            className="gallery_img-medium"
            src={Group6_2}
            alt="Planowanie"
            onClick={() => handleThumbnailClick(Group6_2)}
          />
        </div>
        <div className="gallery_card-left">
          <img
            className="gallery_img-big"
            src={Group7_1}
            alt="Planowanie"
            onClick={() => handleThumbnailClick(Group7_1)}
          />
          <div className="gallery_small_images">
            <img
              className="gallery_img-small"
              src={Group7_2}
              alt="Planowanie"
              onClick={() => handleThumbnailClick(Group7_2)}
            />
            <img
              className="gallery_img-small"
              src={Group7_3}
              alt="Planowanie"
              onClick={() => handleThumbnailClick(Group7_3)}
            />
          </div>
        </div>
        <div className="gallery_card-right">
          <div className="gallery_small_images">
            <img
              className="gallery_img-small"
              src={Group8_1}
              alt="Planowanie"
              onClick={() => handleThumbnailClick(Group8_1)}
            />
            <img
              className="gallery_img-small"
              src={Group8_2}
              alt="Planowanie"
              onClick={() => handleThumbnailClick(Group8_2)}
            />
          </div>
          <img
            className="gallery_img-big"
            src={Group8_3}
            alt="Planowanie"
            onClick={() => handleThumbnailClick(Group8_3)}
          />
        </div>
        <div className="gallery_card-mid">
          <img
            className="gallery_img-medium"
            src={Group9_1}
            alt="Planowanie"
            onClick={() => handleThumbnailClick(Group9_1)}
          />
          <img
            className="gallery_img-medium"
            src={Group9_2}
            alt="Planowanie"
            onClick={() => handleThumbnailClick(Group9_2)}
          />
        </div>
        <div className="gallery_card-right">
          <div className="gallery_small_images">
            <img
              className="gallery_img-small"
              src={Group10_1}
              alt="Planowanie"
              onClick={() => handleThumbnailClick(Group10_1)}
            />
            <img
              className="gallery_img-small"
              src={Group10_2}
              alt="Planowanie"
              onClick={() => handleThumbnailClick(Group10_2)}
            />
          </div>
          <img
            className="gallery_img-big"
            src={Group10_3}
            alt="Planowanie"
            onClick={() => handleThumbnailClick(Group10_3)}
          />
        </div>
      </div>
      {fullScreenImage && (
        <div className="fullscreen-overlay">
          <FaArrowLeft className="arrow arrow_left" onClick={handlePrev} />
          <FaArrowRight className="arrow arrow_right" onClick={handleNext} />
          <FaTimes className="close" onClick={closeFullScreen} />
          <img
            className="fullscreen-image"
            src={fullScreenImage}
            alt="Fullscreen"
          />
        </div>
      )}
      <Footer />
    </>
  );
}
export default Gallery;
