import "./styles.css";

import Navbar from "./components/navbar";
import HeroSection from "./components/heroSection";
import InfoSection from "./components/infoSection";
import PlansGrid from "./components/plansSection";
import SplitScreenCards from "./components/splitScreenCards";
import ContactForm from "./components/contactForm";

function App() {
  return (
    <div className="mainContainer">
      <div className="section1">
        <Navbar />
        <HeroSection />
      </div>
      <div className="section2">
        <InfoSection />
      </div>

      <div className="section3">
        <PlansGrid />
      </div>
      <div className="section4">
        <h3>También puedes consultar por estos servicios </h3>
        <SplitScreenCards />
      </div>
      <div className="section5">
        <ContactForm/>
      </div>
    </div>
  );
}

export default App;
