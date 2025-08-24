import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Particle from "./components/Particle";
import AOS from "aos";
import "aos/dist/aos.css";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Language from "./components/Language";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <Particle />
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Language />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
