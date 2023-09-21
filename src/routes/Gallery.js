import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import heroImage from "../assets/hero_gallery.png";
import Footer from "../components/Footer";
import "./GalleryStyles.css";
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

function Gallery() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={heroImage}
        title="Galeria"
        text="Projekty & budowa"
      />
      <div className="gallery_container">
        <div className="gallery_card-left">
          <img className="gallery_img-big" src={Group1_1} alt="Planowanie" />
          <div className="gallery_small_images">
            <img
              className="gallery_img-small"
              src={Group1_2}
              alt="Planowanie"
            />
            <img
              className="gallery_img-small"
              src={Group1_3}
              alt="Planowanie"
            />
          </div>
        </div>
        <div className="gallery_card-right">
          <div className="gallery_small_images">
            <img
              className="gallery_img-small"
              src={Group2_1}
              alt="Planowanie"
            />
            <img
              className="gallery_img-small"
              src={Group2_2}
              alt="Planowanie"
            />
          </div>
          <img className="gallery_img-big" src={Group2_3} alt="Planowanie" />
        </div>
        <div className="gallery_card-mid">
          <img className="gallery_img-medium" src={Group3_1} alt="Planowanie" />
          <img className="gallery_img-medium" src={Group3_2} alt="Planowanie" />
        </div>
        <div className="gallery_card-right">
          <div className="gallery_small_images">
            <img
              className="gallery_img-small"
              src={Group4_1}
              alt="Planowanie"
            />
            <img
              className="gallery_img-small"
              src={Group4_2}
              alt="Planowanie"
            />
          </div>
          <img className="gallery_img-big" src={Group4_3} alt="Planowanie" />
        </div>
        <div className="gallery_card-left">
          <img className="gallery_img-big" src={Group5_1} alt="Planowanie" />
          <div className="gallery_small_images">
            <img
              className="gallery_img-small"
              src={Group5_2}
              alt="Planowanie"
            />
            <img
              className="gallery_img-small"
              src={Group5_3}
              alt="Planowanie"
            />
          </div>
        </div>
        <div className="gallery_card-mid">
          <img className="gallery_img-medium" src={Group6_1} alt="Planowanie" />
          <img className="gallery_img-medium" src={Group6_2} alt="Planowanie" />
        </div>
        <div className="gallery_card-left">
          <img className="gallery_img-big" src={Group7_1} alt="Planowanie" />
          <div className="gallery_small_images">
            <img
              className="gallery_img-small"
              src={Group7_2}
              alt="Planowanie"
            />
            <img
              className="gallery_img-small"
              src={Group7_3}
              alt="Planowanie"
            />
          </div>
        </div>
        <div className="gallery_card-right">
          <div className="gallery_small_images">
            <img
              className="gallery_img-small"
              src={Group8_1}
              alt="Planowanie"
            />
            <img
              className="gallery_img-small"
              src={Group8_2}
              alt="Planowanie"
            />
          </div>
          <img className="gallery_img-big" src={Group8_3} alt="Planowanie" />
        </div>
        <div className="gallery_card-mid">
          <img className="gallery_img-medium" src={Group9_1} alt="Planowanie" />
          <img className="gallery_img-medium" src={Group9_2} alt="Planowanie" />
        </div>
        <div className="gallery_card-right">
          <div className="gallery_small_images">
            <img
              className="gallery_img-small"
              src={Group10_1}
              alt="Planowanie"
            />
            <img
              className="gallery_img-small"
              src={Group10_2}
              alt="Planowanie"
            />
          </div>
          <img className="gallery_img-big" src={Group10_3} alt="Planowanie" />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Gallery;
