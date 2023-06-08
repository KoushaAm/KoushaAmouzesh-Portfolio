'use client';
import React, { useState, useEffect } from "react";
import "../styles/head.css";

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      const headerHeight = document.querySelector('header')?.clientHeight || 0;
      window.scrollTo({
        top: section.offsetTop - headerHeight,
        behavior: 'smooth',
      });
      setIsSidebarOpen(false);
    }
  };

  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
        // not sure about the proper width yetttt
      setIsMobileView(window.innerWidth <= 768); 
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={`transparent-header ${isSidebarOpen && isMobileView ? "sidebar-open" : ""}`}>
      {isMobileView ? (
        <div className="sidebar-toggle" onClick={toggleSidebar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      ) : (
        <nav className="transparent-header-nav">
            <ul>
                <li><a href="#AboutMe" onClick={(e) => scrollToSection(e, 'AboutMe')}>Me</a></li>
                <li> <a href="#Acedamics" onClick={(e) => scrollToSection(e, 'Acedamics')}>Education</a></li>
                <li><a href="#Skills" onClick={(e) => scrollToSection(e, 'Skills')}>Skills</a></li>
                <li><a href="#Experience" onClick={(e) => scrollToSection(e, 'Experience')}>Experience</a></li>
                <li><a href="#Projects" onClick={(e) => scrollToSection(e, 'Projects')}>Projects</a></li>
                <li><a href="#Contact" onClick={(e) => scrollToSection(e, 'Contact')}>Contact</a></li>
            </ul>
        </nav>
      )}
      <nav className={`sidebar ${isSidebarOpen && isMobileView ? "open" : ""}`}>
        <ul>
            <li><a href="#AboutMe" onClick={(e) => scrollToSection(e, 'AboutMe')}>Me</a></li>
            <li> <a href="#Acedamics" onClick={(e) => scrollToSection(e, 'Acedamics')}>Education</a></li>
            <li><a href="#Skills" onClick={(e) => scrollToSection(e, 'Skills')}>Skills</a></li>
            <li><a href="#Experience" onClick={(e) => scrollToSection(e, 'Experience')}>Experience</a></li>
            <li><a href="#Projects" onClick={(e) => scrollToSection(e, 'Projects')}>Projects</a></li>
            <li><a href="#Contact" onClick={(e) => scrollToSection(e, 'Contact')}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
