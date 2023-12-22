import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import heroImage from "../assets/hero_about.webp";
import Footer from "../components/Footer";
import "./AboutStyles.css";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={heroImage} title="O nas" />
      <div className="about_container">
        <div className="about_up">
          <h1 className="about_title">Sk8yard</h1>
          <p className="about_text">
            To wysoce techniczna i kreatywna firma gotowa by podjąć się każdego
            wyzwania, zdeterminowana by tworzyć najlepsze skateparki.
          </p>
          <p className="about_text">
            Nasz wykwalifikowany zespół nieprzerwalnie{" "}
            <strong>od ponad 15 lat</strong> dąży do udoskonalenia projektów,
            technologii i logistyki tworząc obiekty pełne profesionalnej wiedzy
            i zaangażowania.
          </p>
          <p className="about_text">
            Dzieki naszej nieprzeciętnej wiedzy i determinacji w dąrzeniu do
            osiągania celów, stworzyliśmy silny i niezależny zespół, który od
            2022 roku działa pod marką <strong>SK8YARD</strong>
          </p>
        </div>
        <a href="/Contact">
          <button className="about_button">Skontaktuj się z nami</button>
        </a>
      </div>
      <Footer />
    </>
  );
}
export default About;
