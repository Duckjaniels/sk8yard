import "./AboutUsStyles.css";

function AboutUs(props) {
  return (
    <>
      <div className={props.about_cName}>
        <img alt="HeroImg" src={props.aboutImg} />
        <div className="about-text">
          <h1>{props.about_title}</h1>
          <h2>{props.about_subtitle}</h2>
          <p>{props.about_text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
}
export default AboutUs;
