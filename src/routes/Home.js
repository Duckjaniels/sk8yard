import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import heroImage from "../assets/hero_1.png";
import aboutImage from "../assets/about_image.png";
import OurOffer from "../components/OurOffer";
import PhotoGallery from "../components/PhotoGallery";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={heroImage}
        title="sk8yard"
        text="Sprawiamy, że rzeczy się dzieją..."
      />
      <AboutUs
        about_cName="about_us"
        aboutImg={aboutImage}
        about_title="sk8yard"
        about_subtitle="To grupa specjalistów z ponad 15-letnim doświadczeniem."
        about_text="Zajmujemy się kompleksowym planowaniem, projektowaniem i budową profesionalnych skateparków z wykorzystaniem wielu technologii od konstrukcji sklejkowo-drewnianej przez laserowo wycinane konstrukcje stalowe po skateparki betonowe."
        url="/About"
        btnClass="show"
        buttonText="Czytaj więcej"
      />
      <OurOffer />
      <PhotoGallery />
    </>
  );
}
export default Home;
