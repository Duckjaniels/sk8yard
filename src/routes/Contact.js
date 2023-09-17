import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import heroImage from "../assets/hero_contact.webp";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={heroImage} title="Kontakt" />
      <div className="contact_form-page">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}
export default Contact;
