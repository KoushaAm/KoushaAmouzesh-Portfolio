import React from "react";
import "../styles/head.css"


const Header: React.FC = () => {
  return (
    <header className="transparent-header">
      <nav>
        <ul>
          <li><a href="#AboutMe">Me</a></li>
          <li><a href="#Acedamics">Education</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#Experience">Experience</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;