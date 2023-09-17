import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div className="form-container">
      <h1 className="full-width ">Kontakt</h1>
      <div className="contact">
        <div className="contact_form">
          <h4 className="contact-title">Formularz kontaktowy</h4>
          <form>
            <input placeholder="Imię" />
            <input placeholder="E-mail" />
            <input placeholder="Temat" />
            <input placeholder="Telefon" />
            <textarea placeholder="Wiadomość" rows="4" />
            <button>Wyślij</button>
          </form>
        </div>
        <div className="contact_info">
          <div className="contact_info-up">
            <p className="contact_info-text">
              Potrzebujesz pomocy lub
              <br /> chcesz nawiązać z nami współprace ?
            </p>
            <p className="contact_info-text">
              ZADZWOŃ, NAPISZ lub
              <br /> skorzystaj z FORMULARZA KONTAKTOWEGO
            </p>
          </div>
          <div className="contact_info-down">
            <div className="contact_info-down-left">
              <h4 className="contact-title down">Informacje ogólne</h4>
              <p className="contact_info-text">
                info@sk8yard.com
                <br /> (+48) 785-066-111
              </p>
              <h4 className="contact-title down more">Księgowość</h4>
              <p className="contact_info-text more">ksiegowosc@sk8yard.com</p>
            </div>
            <div className="contact_info-down-right">
              <h4 className="contact-title down ">Projekty i konsultacje</h4>
              <p className="contact_info-text">
                projekty@sk8yard.com
                <br /> (+48) 883-044-014
              </p>
              <h4 className="contact-title down more">Rekrutacja</h4>
              <p className="contact_info-text more">rekrutacja@sk8yard.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
