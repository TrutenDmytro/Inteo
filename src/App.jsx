import React, { useEffect, useRef } from 'react';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Works from './components/Works/Works';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const worksRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    AOS.init({mirror:true});
  }, []);

  const handleScroll = (section) => {
    switch (section) {
      case "home":
        homeRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "services":
        servicesRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "works":
        worksRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "footer":
        footerRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Header handleScroll={handleScroll} />
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={worksRef}>
        <Works handleScroll={handleScroll} />
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
    </>
  );
}

export default App;


