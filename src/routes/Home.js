import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import heroImage from "../assets/hero_1.webp";
import aboutImage from "../assets/about_image.png";
import OurOffer from "../components/OurOffer";
import PhotoGallery from "../components/PhotoGallery";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <Hero
          cName="hero"
          heroImg={heroImage}
          alt="Skatepark w miejscowości Jelenia Góra wykonany w technologii modułowej kompozytowej na konstrukcji drewnianej, sklejkowej pokryty specjalną matą został zbudowany przez firmę SK8YARD. Skatepark przeznaczony jest dla miłosników extremalnej jazdy na deskorolkach, rolkach, rowerach mtb i bmx oraz hulajnogach. "
        />
        <OurOffer />
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
        <PhotoGallery />
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}
export default Home;
