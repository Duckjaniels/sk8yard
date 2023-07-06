import "./PhotoGallery.css";
import Img1 from "../assets/gallery/gallery_1.png";
import Img2 from "../assets/gallery/gallery_2.png";
import Img3 from "../assets/gallery/gallery_3.png";
import Img4 from "../assets/gallery/gallery_4.png";
import Img5 from "../assets/gallery/gallery_5.png";
import Img6 from "../assets/gallery/gallery_6.png";

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
  return (
    <div className="gallery-container">
      <h1>Galeria</h1>
      <p>Przykładowe zdjęcia naszych prac</p>
      <div className="photo-gallery">
        {data.map((item, index) => {
          return (
            <div className="pics" key={index}>
              <img src={item.imgSrc} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default PhotoGallery;
