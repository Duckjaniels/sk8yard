import "./OurOfferStyles.css";
import Offert1 from "../assets/offer_1.webp";
import Offert2 from "../assets/offer_2.webp";
import Offert3 from "../assets/offer_3.webp";
import Offert4 from "../assets/offer_4.webp";
import Offert5 from "../assets/offer_5.webp";
import Offert6 from "../assets/offer_6.webp";

function OurOffer() {
  return (
    <div className="offer">
      <h1 className="full-width">oferta</h1>
      <div className="offercard">
        <div className="o-card o-card-image">
          <h4 className="o-card-title">Planowanie</h4>
          <img src={Offert1} alt="Konsultacje" />
          <p className="o-card-text">
            Zapewniamy specjalistyczną wiedzę w zakresie planowania budowy
            skateparku.
          </p>
          <a href="/Offer" className="offer-button">
            Czytaj więcej
          </a>
        </div>

        <div className="o-card o-card-image">
          <h4 className="o-card-title">Projektowanie</h4>
          <img src={Offert2} alt="Projektowanie" />
          <p className="o-card-text">
            Niewątpliwym sukcesem każdego skateparku jest jego unikalny projekt
          </p>
          <a href="/Offer" className="offer-button">
            Czytaj więcej
          </a>
        </div>

        <div className="o-card o-card-image">
          <h4 className="o-card-title">Budowa </h4>
          <img src={Offert3} alt="Budowa skateparków" />
          <p className="o-card-text">
            Firma SK8YARD to jeden z najbardziej doświadczonych na rynku
            producentów urządzeń skateparku.
          </p>
          <a href="/Offer" className="offer-button">
            Czytaj więcej
          </a>
        </div>
        <div className="o-card o-card-image">
          <h4 className="o-card-title">Pumptracki modułowe</h4>
          <img src={Offert4} alt="Pumptracki modułowe" />
          <p className="o-card-text">
            Doskonale zaprojektowane i łatwe w montażu Modułowe Tory Pumptracki.
          </p>
          <a href="/Offer" className="offer-button">
            Czytaj więcej
          </a>
        </div>
        <div className="o-card o-card-image">
          <h4 className="o-card-title">Urządenia mobilne</h4>
          <img src={Offert5} alt="Urządenia mobilne" />
          <p className="o-card-text">
            SK8YARD oferuje kompleksową usługę od projektu koncepcyjnego po
            realizację urządzeń na potrzeby własne i komercyjne
          </p>
          <a href="/Offer" className="offer-button">
            Czytaj więcej
          </a>
        </div>
        <div className="o-card o-card-image">
          <h4 className="o-card-title">Serwis i modernizacje</h4>
          <img src={Offert6} alt="Serwis i modernizacje" />
          <p className="o-card-text">
            Oferujemy pełny pakiet serwisowy od przeglądów gwarancyjnych przez
            naprawy i konserwację aż po Kompleksową naprawę i modernicazję
            skateparków.
          </p>
          <a href="/Offer" className="offer-button">
            Czytaj więcej
          </a>
        </div>
      </div>
      <a href="/Offer">
        <button className="offer-button_main">Czytaj więcej</button>
      </a>
    </div>
  );
}
export default OurOffer;
