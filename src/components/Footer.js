import React, { useState } from "react";
import "./FooterStyles.css";
import arrow from "../assets/arrow.svg";
import { MenuItems } from "./MenuItems.js";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [isRotating, setIsRotating] = useState(false);

  const rotatePage = () => {
    setIsRotating(true);
    setTimeout(() => {
      scroll.scrollToTop({
        duration: 800,
        smooth: "easeInOutQuart",
      });
      setIsRotating(false);
    }, 1000); // Czas oczekiwania przed zakończeniem obrotu
  };
  return (
    <div className={`footer${isRotating ? " rotate-page" : ""}`}>
      <div className="left">
        <ul>
          <li>
            <strong>SK8YARD</strong> Sp. z o.o.
          </li>
          <li>ul. Królewska 57, 30-081 Kraków</li>
          <li>NIP: 6772473291, REGON: 520972858</li>
          <li>KRS: 0000947281</li>
        </ul>
      </div>
      <div className="mid">
        <div onClick={rotatePage} className="footer-arrow-container">
          <img className="footer-arrow" src={arrow} alt="arrow up" />
          do a kickflip!
        </div>

        <p className="copywrite">© Sk8yard 2023</p>
      </div>
      <div className="right">
        <div className="socials">
          <p className="follow">media:</p>
          <FontAwesomeIcon icon={faFacebook} size="2x" />
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </div>
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
