import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/contact.css';
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const profilePic = 'https://github.com/KoushaAm/KoushaAmouzesh-Portfolio/blob/main/styles/logos/kousha_amouzesh_profile.png?raw=true';

export default function Contact() {
  return (
    <section className="section-contact" id="Contact">
      <h1 className="contact-title">Get In Touch</h1>
      
      <div className="contact-wrapper">
        <div className="contact-card">
          {/* Left: Profile */}
          <div className="contact-left">
            <img src={profilePic} alt="Kousha Amouzesh" className="profile-image" />
            <h2 className="profile-name">Kousha Amouzesh</h2>
            <p className="profile-role">Software Engineer</p>
          </div>

          {/* Middle: Contact Info */}
          <div className="contact-middle">
            <a href="mailto:koushaamouzesh@gmail.com" className="info-row">
              <FontAwesomeIcon icon={faEnvelope as IconProp} />
              <span>koushaamouzesh@gmail.com</span>
            </a>
            <a href="tel:+16047822974" className="info-row">
              <FontAwesomeIcon icon={faPhone as IconProp} />
              <span>604-782-2974</span>
            </a>
            <div className="info-row">
              <FontAwesomeIcon icon={faMapMarkerAlt as IconProp} />
              <span>Vancouver, Canada</span>
            </div>
          </div>

          {/* Right: Social Links */}
          <div className="contact-right">
            <a 
              href="https://www.linkedin.com/in/kousha-amouzesh-b31445232/" 
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn linkedin-btn"
            >
              <FontAwesomeIcon icon={faLinkedin as IconProp} />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/KoushaAm" 
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn github-btn"
            >
              <FontAwesomeIcon icon={faGithub as IconProp} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}