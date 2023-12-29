import React, { useState } from "react";
import "./PhotoGalleryStyles.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CloseIcon from "@material-ui/icons/Close";
import Img1 from "../assets/gallery/gallery_1.webp";
import Img2 from "../assets/gallery/gallery_2.webp";
import Img3 from "../assets/gallery/gallery_3.webp";
import Img4 from "../assets/gallery/gallery_4.webp";
import Img5 from "../assets/gallery/gallery_5.webp";
import Img6 from "../assets/gallery/gallery_6.webp";

const PhotoGallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
  ];
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  const handleArrowClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="gallery-container">
      <h1 className="full-width">Galeria</h1>

      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} />
        <CloseIcon onClick={() => setModel(false)} />
      </div>
      <div className="photo-gallery">
        {/* Karuzela */}
        <div className="carousel">
          <Carousel showThumbs={false} selectedItem={currentIndex}>
            {data.map((item, index) => (
              <div
                className="pics"
                key={index}
                onClick={() => getImg(item.imgSrc)}
              >
                <img src={item.imgSrc} style={{ width: "100%" }} />
              </div>
            ))}
          </Carousel>
        </div>
        {/* Miniatury */}
        <div className="thumbnails">
          {data.map((item, index) => (
            <div
              className={`thumbnail ${currentIndex === index ? "active" : ""}`}
              key={index}
              onClick={() => handleArrowClick(index)}
            >
              <img src={item.imgSrc} style={{ width: "100%" }} />
            </div>
          ))}
        </div>
      </div>
      <a href="/Offer">
        <button className="offer-button_main">Zobacz więcej</button>
      </a>
    </div>
  );
};

export default PhotoGallery;
