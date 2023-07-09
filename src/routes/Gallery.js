import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import heroImage from "../assets/hero_gallery.png";
import Footer from "../components/Footer";

function Gallery() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={heroImage} title="Galeria" />
      <Footer />
    </>
  );
}
export default Gallery;
