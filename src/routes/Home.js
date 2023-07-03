import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import heroImage from '../assets/hero_1.png'

function Home (){
return(
  <>
   <Navbar/>
  <Hero
  cName="hero"
  heroImg={heroImage}
  title="sk8yard"
  text="Sprawiamy, że rzeczy się dzieją..."
  />
 </>
)
}
export default Home;