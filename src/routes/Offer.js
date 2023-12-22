import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import heroImage from "../assets/hero_offer.webp";
import Footer from "../components/Footer";
import "./OfferStyles.css";
import Offert_1 from "../assets/offert/offert_1.webp";
import Offert_2 from "../assets/offert/offert_2.webp";
import Offert_3 from "../assets/offert/offert_3.webp";
import Offert_4 from "../assets/offert/offert_4.webp";
import Offert_5 from "../assets/offert/offert_5.webp";
import Offert_6 from "../assets/offert/offert_6.webp";

function Offer() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={heroImage} title="Oferta" />
      <div className="offer_container">
        <div className="offer_card_left">
          <div className="offer_text">
            <h2 className="offer_text-title">1 | Planowanie</h2>
            <p className="offer_text-description">
              Zapewniamy specjalistyczną wiedzę w zakresie planowania budowy
              skateparku. Niezależnie od tego, czy chodzi o dobór urządzeń,
              wybór odpowiedniej technologii czy lokalizacji, staramy się
              zaoferować najlepszą pomoc. Wychodząc na przeciw potrzebą
              inwestorów organizujemy m.in:
            </p>
            <ul>
              <li>spotkania z włodarzami</li>
              <li>wizje lokalne</li>
              <li>warsztaty z użytkownikami</li>
            </ul>
          </div>
          <div className="offer_image">
            <img src={Offert_1} alt="Planowanie" />
          </div>
        </div>
        <div className="offer_card_right">
          <div className="offer_text">
            <h2 className="offer_text-title">2 | Projektowanie</h2>
            <p className="offer_text-description">
              Niewątpliwym sukcesem każdego skateparku jest jego unikalny
              projekt dopasowany do miejsca oraz potrzeb lokalnych mieszkańców i
              użytkowników. Głęboko wierzymy, że każdy projekt zasługuje na
              indywidualne potraktowanie i powinien uwzględniac m.in. takie
              aspekty jak funkcjonalność, bezpieczeństwo, estetykę czy płynność
              jazdy. Cieszymy się, że możemy dostarczyć kompleksową usługę od
              koncepcji 3D, rysunków technicznych po pełną dokumentację
              projektową wraz z niezbędnymi uzgodnieniami.
            </p>
          </div>
          <div className="offer_image">
            <img src={Offert_2} alt="Projektowanie" />
          </div>
        </div>
        <div className="offer_card_left">
          <div className="offer_text">
            <h2 className="offer_text-title">3 | Budowa</h2>
            <p className="offer_text-description">
              SK8YARD to jeden z najbardziej doświadczonych na rynku producentów
              urządzeń skateparku. Posiadamy ponad 15-letnie doświadczenie w
              projektowaniu i budowie. Przez ten okres nasz zespół wykreował
              swój unikalny zestaw umiejętności który pozwala nam na budowę
              skateparku w niemal każdej dostępnej technologii m.in:
            </p>
            <ul>
              <li>sklejkowo-kompozytowe</li>
              <li>na konstrukcji stalowej</li>
              <li>betonowe</li>
            </ul>
          </div>
          <div className="offer_image">
            <img src={Offert_3} alt="Budowa" />
          </div>
        </div>
        <div className="offer_card_right">
          <div className="offer_text">
            <h2 className="offer_text-title">4 | Pumptracki modułowe</h2>
            <p className="offer_text-description">
              Doskonale zaprojektowane i łatwe w montażu Modułowe Tory Pumptrack
              to idealne uzupełnienie skateparków lub jako całkowicie osobny
              element zagospodarowania dla miłośników jazdy na deskorolce,
              rowerze, hulajnogach czy rolkach. Technologia modułowa to przede
              wszystkim:
            </p>
            <ul>
              <li>Szybki montaż nawet w 1 dzień</li>
              <li>Przyczepna i bezpieczna nawierzchnia antypoślizgowa</li>
              <li>Dowolna kolorystyka z palety RAL</li>
            </ul>
          </div>
          <div className="offer_image">
            <img src={Offert_4} alt="Pumptracki modułowe" />
          </div>
        </div>
        <div className="offer_card_left">
          <div className="offer_text">
            <h2 className="offer_text-title">5 | Urządzenia mobilne</h2>
            <p className="offer_text-description">
              Jeżeli prowadzisz szkółkę, organizujesz imprezę lub marzysz o
              prywatnej minirampie, to SK8YARD oferuje kompleksową usługę od
              projektu koncepcyjnego po realizację urządzeń na potrzeby własne i
              komercyjne m.in.:
            </p>
            <ul>
              <li>Sprzedaż mobilnych urządzeń typu skocznie, rurki itp.</li>
              <li>
                Projekt i budowa urządzeń na potrzeby własne lub komercyjne
              </li>
              <li>Wynajem urządzeń na imprezy</li>
              <li>Organizacja pokazów i warsztatów z instruktorami.</li>
            </ul>
          </div>
          <div className="offer_image">
            <img src={Offert_5} alt="Urządzenia mobilne" />
          </div>
        </div>
        <div className="offer_card_right">
          <div className="offer_text">
            <h2 className="offer_text-title">6 | Serwis i modernizacje</h2>
            <p className="offer_text-description">
              Z biegiem czasu każdy skatepark może wymagać naprawy lub
              konserwacji. Wychodząc na przeciw oczekiwanią naszych klientów
              oferujemy pełny pakiet serwisowy od przeglądów gwarancyjnych przez
              naprawy i konserwację aż po Kompleksową naprawę i modernicazję
              skateparków.
            </p>
          </div>
          <div className="offer_image">
            <img src={Offert_6} alt="Serwis i modernizacja" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Offer;
