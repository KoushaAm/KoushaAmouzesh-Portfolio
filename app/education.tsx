import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faUniversity, faStar, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import '../styles/education.css'; // Import the CSS file
import { IconProp } from "@fortawesome/fontawesome-svg-core";


export default function Education() {
  return (
    <section id="Education" className="education-section">
      <div className="education-content">
        <div className='education-card'>
          <div className="card">
            <h1 className="education-title">Education</h1>
            <div className="education-item">
              <p>
                <FontAwesomeIcon icon={faGraduationCap as IconProp} style={{ marginRight: "10px"}} />
                Computer Science BSc
              </p>
              <p>
                <FontAwesomeIcon icon={faUniversity as IconProp} style={{ marginRight: "10px" }} />
                Simon Fraser University
              </p>
              <p>
                <FontAwesomeIcon icon={faStar as IconProp} style={{ marginRight: "10px" }} />
                GPA: (A+) 4.00/4.33
              </p>
              <p>
                <FontAwesomeIcon icon={faCalendarAlt as IconProp} style={{ marginRight: "10px" }} />
                Expected Graduation: December 2025
              </p>
            </div>
            <div className="education-item">
              <p className="objective-title">Academic Objectives</p>
              <p className="objective-text">
                My academic objectives are to pursue a graduate degree in Computer Science with a focus on Machine Learning studies.
              </p>
              <p className="objective-text">
                I plan to achieve this goal after gaining practical industry skills through co-op and full-time software development/engineering positions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
