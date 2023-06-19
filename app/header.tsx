import React, { useState, useEffect } from "react";
import "../styles/head.css";

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
      setIsMobileView(window.innerWidth <= 1000);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`transparent-header ${isSidebarOpen && isMobileView ? "sidebar-open" : ""} ${isScrolled ? "scrolled" : ""}`}
    >
      {isMobileView ? (
        // Mobile view sidebar toggle
        <div className="sidebar-toggle" onClick={toggleSidebar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      ) : (
        // Desktop view navigation
        <nav className="transparent-header-nav">
          <ul>
            {/* Navigation links */}
            <a href="#AboutMe" onClick={(e) => scrollToSection(e, 'AboutMe')}>
              <li>Me</li>
            </a>
            <a href="#Education" onClick={(e) => scrollToSection(e, 'Education')}>
              <li>Education</li>
            </a>
            <a href="#Skills" onClick={(e) => scrollToSection(e, 'Skills')}>
              <li>Skills</li>
            </a>
            <a href="#Projects" onClick={(e) => scrollToSection(e, 'Projects')}>
              <li>Projects</li>
            </a>
            <a href="#Resume" onClick={(e) => scrollToSection(e, 'Resume')}>
              <li>Resume</li>
            </a>
            <a href="#Contact" onClick={(e) => scrollToSection(e, 'Contact')}>
              <li>Contact</li>
            </a>
          </ul>
        </nav>
      )}
      {/* Mobile view sidebar */}
      <nav className={`sidebar ${isSidebarOpen && isMobileView ? "open" : ""}`}>
        <ul>
          {/* Sidebar links */}
          <a href="#AboutMe" onClick={(e) => scrollToSection(e, 'AboutMe')}>
            <li>Me</li>
          </a>
          <a href="#Education" onClick={(e) => scrollToSection(e, 'Education')}>
            <li>Education</li>
          </a>
          <a href="#Skills" onClick={(e) => scrollToSection(e, 'Skills')}>
            <li>Skills</li>
          </a>
          <a href="#Projects" onClick={(e) => scrollToSection(e, 'Projects')}>
            <li>Projects</li>
          </a>
          <a href="#Resume" onClick={(e) => scrollToSection(e, 'Resume')}>
            <li>Resume</li>
          </a>
          <a href="#Contact" onClick={(e) => scrollToSection(e, 'Contact')}>
            <li>Contact</li>
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
