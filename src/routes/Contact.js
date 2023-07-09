import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import heroImage from "../assets/hero_contact.png";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={heroImage} title="Kontakt" />
      <Footer />
    </>
  );
}
export default Contact;
