import React from 'react';
import '../styles/page.css';
import { useState } from 'react';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Resume() {
    const [backgroundColor, setBackgroundColor] = useState<string>('black');
    return (
        <section id="Resume" className="section" style={{ backgroundColor }}>
            <h1 style={{ fontSize:"60px", marginTop: "0px", marginLeft: "70px" }}>
                <strong>My Resume</strong>
                
            </h1>
            <div style={{ marginLeft: "70px", marginTop: "20px" }}>
            
                <a href="https://github.com/KoushaAm/KoushaAmouzesh-Portfolio/blob/main/resume-KoushaAmouzesh.pdf?raw=true" download>
                <FontAwesomeIcon icon={faDownload} style={{ marginRight: "8px" }} />
                Download Resume
                </a>
                <img src="https://github.com/KoushaAm/KoushaAmouzesh-Portfolio/blob/main/resume.png?raw=true" style={{ padding: "150px" }}></img>
            </div>
            
      
    </section>
    );
}