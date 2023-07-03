import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import heroImage from "../assets/hero_gallery.png";

function Gallery() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={heroImage} title="Galeria" />
    </>
  );
}
export default Gallery;
