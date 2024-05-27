import React, { useState } from 'react';
import '../styles/page.css';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import '../styles/resume.css'

export default function Resume() {
    const [backgroundColor, setBackgroundColor] = useState<string>('black');
    return (
        <section id="Resume" className="section" style={{ backgroundColor }}>
            <h1>
                <strong>Resume</strong>
            </h1>

            <div className="resume-content">
                <div className = "button-content"> 
                    <a className="download-button" href="https://github.com/KoushaAm/KoushaAmouzesh-Portfolio/blob/main/Kousha-Amouzesh-Resume.pdf?raw=true" download>
                        <FontAwesomeIcon icon={faDownload as IconProp} />
                        Download Resume
                    </a>
                </div>
                

                <img className="resume-image" src="https://github.com/KoushaAm/KoushaAmouzesh-Portfolio/blob/main/Kousha-Amouzesh-Resume.png?raw=true" alt="Resume" />
            </div>
        </section>
    );
}
