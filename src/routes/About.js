import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import heroImage from "../assets/hero_about.png";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={heroImage} title="O nas" />
      <Footer />
    </>
  );
}
export default About;
