import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import heroImage from "../assets/hero_about.webp";
import Footer from "../components/Footer";
import "./AboutStyles.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 800, // czas trwania animacji w milisekundach
      offset: 200, // odstęp od dolnej krawędzi okna przeglądarki, aby rozpocząć animację
      easing: "ease-in-out", // funkcja przejścia animacji
    });
  }, []);
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={heroImage} title="O nas" />
      <div className="about_container">
        <div className="about_up">
          <h1 className="about_title" data-aos="fade-up">
            Sk8yard
          </h1>
          <div className="about_text-container">
            <p className="about_text" data-aos="fade-up">
              To wysoce techniczna i kreatywna firma gotowa by podjąć się
              każdego wyzwania, zdeterminowana by tworzyć najlepsze skateparki.
            </p>
            <p className="about_text" data-aos="fade-up">
              Nasz wykwalifikowany zespół nieprzerwalnie{" "}
              <strong>od ponad 15 lat</strong> dąży do udoskonalenia projektów,
              technologii i logistyki tworząc obiekty pełne profesionalnej
              wiedzy i zaangażowania.
            </p>
            <p className="about_text" data-aos="fade-up">
              Dzieki naszej nieprzeciętnej wiedzy i determinacji w dąrzeniu do
              osiągania celów, stworzyliśmy silny i niezależny zespół, który od
              2022 roku działa pod marką <strong>SK8YARD</strong>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default About;
