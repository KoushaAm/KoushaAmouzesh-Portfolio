import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedin, 
  faGithub 
} from '@fortawesome/free-brands-svg-icons';
import '../styles/contact.css'; // Import the CSS file
import { IconProp } from "@fortawesome/fontawesome-svg-core";


export default function Contact() {
  return (
    <section className="section-contact" id="Contact">
      <div className="container-contact">
        <h1>Contact</h1>
        <div className="contact-content">
          <div className="contact-item">
            <p>
              <FontAwesomeIcon icon={faEnvelope as IconProp} />
              <span>koushaamouzesh@gmail.com</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone as IconProp} />
              <span>604-782-2974</span>
            </p>
            <a href="https://www.linkedin.com/in/kousha-amouzesh-b31445232/" className="link">
              <FontAwesomeIcon icon={faLinkedin as IconProp} />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/KoushaAm?tab=overview&from=2023-05-01&to=2023-05-28" className="link">
              <FontAwesomeIcon icon={faGithub as IconProp} />
              <span>GitHub</span>
            </a>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt as IconProp} />
              <span>Vancouver, B.C., Canada</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
