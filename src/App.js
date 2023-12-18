import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home.js";
import About from "./routes/About.js";
import Offer from "./routes/Offer.js";
import Gallery from "./routes/Gallery.js";
import Contact from "./routes/Contact.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
