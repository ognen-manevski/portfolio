import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Lenis from 'lenis'

import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";

import Hero from "../components/Home/Hero/Hero.jsx";
import Clients from "../components/Home/Clients/Clients.jsx";
import AboutMe from "../components/Home/AboutMe/AboutMe.jsx";
import Skills from "../components/Home/Skills/Skills.jsx";
import LatestProjects from "../components/Home/LatestProjects/LatestProjects.jsx";
import Contact from "../components/Home/Contact/Contact.jsx";

function Home() {

  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);


  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);


  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <AboutMe />
        <Skills />
        <LatestProjects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Home;
