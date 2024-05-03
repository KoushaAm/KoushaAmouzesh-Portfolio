import React from 'react';
import { metadata } from './layout';
import { useState, useEffect } from 'react';
import Header from './header';
import '../styles/page.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faUniversity, faStar, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

import {styles} from './styles'

export default function Education() {
  return (
    <section id="Education" className="education-section">
    <div className="education-content" style={{ lineHeight: "1.2", padding: "20px" }}>
      <div className='education-card'>
      <div className="card" style={{textAlign: "center" }}>
        <h1 style={{ textAlign: 'center', marginBottom: "20px" }}><strong>Education</strong></h1>
        <div className="education-item" style={{ marginBottom: "10px" }}>
          <p style={{ fontSize: '30px', fontWeight: "bold", marginBottom: "5px" }}>
            <FontAwesomeIcon icon={faGraduationCap} style={{ marginRight: "10px"}} />
            Computer Science BSc
          </p>
          <p style={{ marginBottom: "5px" }}>
            <FontAwesomeIcon icon={faUniversity} style={{ marginRight: "10px" }} />
            Simon Fraser University
          </p>
          <p style={{ marginBottom: "5px" }}>
            <FontAwesomeIcon icon={faStar} style={{ marginRight: "10px" }} />
            GPA: (A+) 4.00/4.33
          </p>
          <p style={{ marginBottom: "5px" }}>
            <FontAwesomeIcon icon={faCalendarAlt} style={{ marginRight: "10px" }} />
            Expected Graduation: December 2025
          </p>
        </div>
        <div className="education-item">
          <p style={{ fontSize: '30px', fontWeight: "bold", marginBottom: "5px" }}>Academic Objectives</p>
          <p style={{ textAlign: 'center' }}>My academic objectives are to pursue a graduate degree in Computer Science with a focus on Machine Learning studies.</p>
          <p style={{ textAlign: 'center' }}>I plan to achieve this goal after gaining practical industry skills through co-op and full-time software development/engineering positions.</p>
        </div>
      </div>
    </div>

      </div>
      
</section>
  );
}