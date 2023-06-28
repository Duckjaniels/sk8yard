import "./HeroStyles.css";
import heroImage from '../assets/hero_1.png'

function Hero(){
  return(
    <>
    <div className="hero">
      <img alt="HeroImg" src={heroImage}/>
      <div className="hero-text">
        <h1 className="hero-title">sk8yard</h1>
        <p className="hero-subtitle">Sprawiamy, że rzeczy się dzieją... </p>
      </div>
    </div>
    </>
  )
}
export default Hero;