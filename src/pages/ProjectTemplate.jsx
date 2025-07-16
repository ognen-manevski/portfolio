import { useEffect } from "react";
import Lenis from 'lenis'

import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";

import ProjectTitleSection from "../components/ProjectTemplate/ProjectTitleSection/ProjectTitleSection.jsx";
import ProjectBody from "../components/ProjectTemplate/ProjectBody/ProjectBody.jsx";


function ProjectTemplate() {

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
        <ProjectTitleSection />
        <ProjectBody />
      </main>
      <Footer />
    </>
  );
}

export default ProjectTemplate;
