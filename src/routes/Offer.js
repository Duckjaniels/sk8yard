import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import heroImage from "../assets/hero_offer.png";
import Footer from "../components/Footer";

function Offer() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={heroImage} title="Oferta" />
      <Footer />
    </>
  );
}
export default Offer;
