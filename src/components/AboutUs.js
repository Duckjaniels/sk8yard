import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importuj styl AOS

import "./AboutUsStyles.css"; // Importuj style dla AboutUs

function AboutUs(props) {
  useEffect(() => {
    AOS.init({
      duration: 800, // czas trwania animacji w milisekundach
      offset: 100, // odstęp od dolnej krawędzi okna przeglądarki, aby rozpocząć animację
      easing: "ease-in-out", // funkcja przejścia animacji
    });
  }, []);
  return (
    <>
      <div className={props.about_cName}>
        <img alt="HeroImg" src={props.aboutImg} />
        <div className="about-text">
          <h1 data-aos="fade-up">{props.about_title}</h1>
          <h2 data-aos="fade-up">{props.about_subtitle}</h2>
          <p data-aos="fade-up"> {props.about_text}</p>
          <a data-aos="fade-up" href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
}
export default AboutUs;
