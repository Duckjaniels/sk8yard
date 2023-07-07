import "./OurOfferStyles.css";
import OurOfferData from "./OurOfferData";
import Offert1 from "../assets/offer1.png";
import Offert2 from "../assets/offer2.png";
import Offert3 from "../assets/offer3.png";

function OurOffer() {
  return (
    <div className="offer">
      <h1>oferta</h1>
      <p>
        Od planowania i projektowania, po produkcję i budowę, aż po organizację
        eventów SK8YARD to punkt kompleksowej obsługi wszystkich skateparków, w
        tym napraw i konserwacji.
      </p>
      <div className="offercard">
        <OurOfferData
          image={Offert1}
          heading="Konsultacje"
          text="Zapewniamy specjalistyczną wiedzę w zakresie planowania budowy skateparku. Niezależnie od tego, czy chodzi o dobór urządzeń, wybór odpowiedniej technologii czy lokalizacji, staramy się zaoferować najlepszą pomoc."
        />
        <OurOfferData
          image={Offert2}
          heading="Projektowanie"
          text="Niewątpliwym sukcesem każdego skateparku jest jego unikalny projekt dopasowany do miejsca i potrzeb lokalnych użytkowników. Cieszymy się, że możemy dostarczyć kompleksową usługę od wizualizacji 3D, rysunków technicznych po pełną dokumentację projektową."
        />
        <OurOfferData
          image={Offert3}
          heading="Budowa skateparków"
          text="SK8YARD to jeden z najbardziej doświadczonych na rynku dostawców urządzeń skateparku. Posiadamy swój unikalny zestaw umiejętności który pozwala nam na budowę skateparku w niemal każdej dostępnej na rynku technologii."
        />
      </div>
      <a href="/Offer" className="offer-button">
        Zobacz więcej
      </a>
    </div>
  );
}
export default OurOffer;
