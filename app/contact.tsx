import React from 'react';
import { metadata } from './layout';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faUniversity, faStar, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Analytics } from '@vercel/analytics/react';

export default function Experience() {
    const [backgroundColor, setBackgroundColor] = useState<string>('black');
  return (
    <section className="section-contact" id="Contact" style={{ backgroundColor, marginTop: "0px"}}>
      <div className="container-contact">
        <h1 style = {{fontSize:"60px"}}><strong>Contact</strong></h1>
        <div className="contact-content">
          <div className="contact-item">

            <p style = {{marginBottom: "0px"}}>
              <FontAwesomeIcon icon={faEnvelope} />
              <span  style = {{marginLeft: "10px"}}>koushaamouzesh@gmail.com</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} />
              <span  style = {{marginLeft: "10px"}}>604-782-2974</span>
            </p>

            <a href="https://www.linkedin.com/in/kousha-amouzesh-b31445232/" style = {{marginBottom: "30px"}} className="link">
              <FontAwesomeIcon icon={faLinkedin} />
              <span style = {{marginLeft: "10px"}}>LinkedIn</span>
            </a>

            <a href="https://github.com/KoushaAm?tab=overview&from=2023-05-01&to=2023-05-28" className="link">
              <FontAwesomeIcon icon={faGithub} />
              <span  style = {{marginLeft: "10px"}}>GitHub</span>
            </a>
            

            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span  style = {{marginLeft: "10px"}}>Vancouver, B.C., Canada</span>
            </p>

            
          </div>
            
        </div>
      </div>
    </section>
  );
}