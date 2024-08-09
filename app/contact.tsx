import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/contact.css'; // Import the CSS file
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const profilePic = 'https://github.com/KoushaAm/KoushaAmouzesh-Portfolio/blob/main/styles/logos/kousha_amouzesh_profile.png?raw=true';

export default function Contact() {
  return (
    <section className="section-contact" id="Contact">
      <div className="contact-card">
        <div className="contact-card-body">
          <div className="contact-card-header">
            <h2>Contact</h2>
          </div>
          
          <div className="contact-content">
            <div className="profile-pic">
              <img src={profilePic} alt="Profile" />
            </div>
            <div className="contact-info">
              <p>
                <FontAwesomeIcon icon={faEnvelope as IconProp} />
                <span><strong>koushaamouzesh@gmail.com</strong></span>
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone as IconProp} />
                <span><strong>604-782-2974</strong></span>
              </p>
              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt as IconProp} />
                <span><strong>Vancouver, Canada</strong></span>
              </p>
              <div className="social-buttons">
                <a href="https://www.linkedin.com/in/kousha-amouzesh-b31445232/" className="button linkedin">
                  <FontAwesomeIcon icon={faLinkedin as IconProp} />
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/KoushaAm?tab=overview&from=2023-05-01&to=2023-05-28" className="button github">
                  <FontAwesomeIcon icon={faGithub as IconProp} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
