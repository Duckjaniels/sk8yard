import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div className="form-container">
      <h1>Skontaktuj się z nami !</h1>
      <form>
        <input placeholder="Imię" />
        <input placeholder="E-mail" />
        <input placeholder="Temat" />
        <input placeholder="Telefon" />
        <textarea placeholder="Wiadomość" rows="4" />
        <button>Wyślij</button>
      </form>
    </div>
  );
}

export default ContactForm;
