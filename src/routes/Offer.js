import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import heroImage from "../assets/hero_offer.webp";
import Footer from "../components/Footer";
import "./OfferStyles.css";

function Offer() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={heroImage}
        title="Oferta"
        text="PROJEKTUJEMY - BUDUJEMY - JEŹDZIMY"
      />
      <div className="offer_container">
        <div className="offer_text">
          <h2 className="offer_text-title">1 | Planowanie</h2>
          <p className="offer_text-description">
            Zapewniamy specjalistyczną wiedzę w zakresie planowania budowy
            skateparku. Niezależnie od tego, czy chodzi o dobór urządzeń, wybór
            odpowiedniej technologii czy lokalizacji, staramy się zaoferować
            najlepszą pomoc. Wychodząc na przeciw potrzebą inwestorów
            organizujemy m.in: spotkania z włodarzami wizje lokalne warsztaty z
            użytkownikami
          </p>
        </div>
        <div className="offer_image"></div>
      </div>
      <Footer />
    </>
  );
}
export default Offer;
