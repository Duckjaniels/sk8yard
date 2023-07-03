import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import heroImage from "../assets/hero_contact.png";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={heroImage} title="Kontakt" />
    </>
  );
}
export default Contact;
