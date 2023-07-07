import "./FooterStyles.css";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <ul>
          <li>
            <strong>SK8YARD</strong> Sp. z o.o.
          </li>
          <li>ul. Królewska 57, 30-081 Kraków</li>
          <li>NIP: 6772473291</li>
          <li>REGON: 520972858</li>
        </ul>
      </div>
      <div className="mid">
        <img className="footer-logo" src={logo} alt="sk8yard logo" />
        <div className="socials">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </div>
        <p className="copywrite">© Sk8yard 2023</p>
      </div>
      <div className="right">
        <ul>
          <li>INFORMACJE OGÓLNE:</li>
          <li>info@sk8yard.com | 785-066-111</li>
          <li>PROJEKTY I KONSULTACJE:</li>
          <li>projekty@sk8yard.com | 883-044-014</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
