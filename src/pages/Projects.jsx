import React, { useEffect, useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Lenis from 'lenis'

import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";

import TitleSection from "../components/Projects/TitleSection/TitleSection.jsx";
import CardsGallery from "../components/Projects/CardsGallery/CardsGallery.jsx";


function Projects() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // get filter from URL parameter / all default
  const getInitialFilter = useCallback(() => {
    const urlParams = new URLSearchParams(location.search);
    const filterParam = urlParams.get('filter');
    const validFilters = ['all', 'web', 'design', 'video', '3d'];
    return validFilters.includes(filterParam) ? filterParam : 'all';
  }, [location.search]);

  const [activeFilter, setActiveFilter] = useState(getInitialFilter());

  // filter changes + update url
  const handleFilterChange = (newFilter) => {
    setActiveFilter(newFilter);
    // update url
    const newUrl = newFilter === 'all' ? '/projects' : `/projects?filter=${newFilter}`;
    navigate(newUrl, { replace: true });
  };

  // update filter
  useEffect(() => {
    const newFilter = getInitialFilter();
    if (newFilter !== activeFilter) {
      setActiveFilter(newFilter);
    }
  }, [location.search, activeFilter, getInitialFilter]);

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
        <TitleSection
          activeFilter={activeFilter}
          setActiveFilter={handleFilterChange}
        />
        <CardsGallery
          activeFilter={activeFilter}
        />
      </main>
      <Footer />
    </>
  );
}

export default Projects;
