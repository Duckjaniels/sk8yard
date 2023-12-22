import "./FooterStyles.css";
import arrow from "../assets/arrow.svg";
import { MenuItems } from "./MenuItems.js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <ul>
          <li>
            <strong>SK8YARD</strong> Sp. z o.o.
          </li>
          <li>ul. Królewska 57,</li>
          <li>30-081 Kraków</li>
          <li>NIP: 6772473291</li>
          <li>REGON: 520972858</li>
          <li>KRS: 0000947281</li>
        </ul>
      </div>
      <div className="mid">
        <a href="#">
          <img href="#" className="footer-arrow" src={arrow} alt="arrow up" />
          do góry
        </a>
        <div className="socials">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
          <FontAwesomeIcon icon={faInstagram} size="2x" />
          <FontAwesomeIcon icon={faYoutube} />
        </div>
        <p className="follow">follow us</p>
        <p className="copywrite">© Sk8yard 2023</p>
      </div>
      <div className="right">
        <ul className="footer_menu">
          {MenuItems.map((item, index) => {
            const isLastLink = index === MenuItems.length - 1;
            const linkClassName = isLastLink
              ? "nav-links last-link"
              : "nav-links";
            return (
              <li key={index}>
                <Link className={linkClassName} to={item.url}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
