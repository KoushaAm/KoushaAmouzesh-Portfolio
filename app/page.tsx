'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import Header from './header';
import '../styles/page.css'; // Import the CSS file for the Home component

const Home: React.FC = () => {

  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <main>
      <Header />
      <section className="section">
        <div className="wrapper">
          <div className="typing-demo">Kousha Amouzesh</div>
          <div className={`typing-demo-2 ${isVisible ? 'visible' : ''}`}>
            I am a software developer
          </div>

        </div>
        
      </section>
      <section id="AboutMe" className="section">
        <h1 style ={{marginLeft: "80px", fontSize: "60px"}}><strong>About me...</strong></h1>
        <div className="about-content">
          <div className="about-text" style={{ margin:"40px" }}>
            <p className="about-paragraph">
              I am a 20-year-old Computer Science student at Simon Fraser University in Burnaby, British Columbia. Since a young age, I have been fascinated by the potential of computer science and mathematics, starting with the first spaceship game I developed at the age of 14. As I progress in my academic journey, I am constantly inspired by projects that bridge the vast world of mathematics with computer science. Currently, I am actively seeking a co-op position for the remainder of 2023.
            </p>
            <p className="about-paragraph">
              Besides my passion for technology and academia, I have a strong drive for sports and thrive in competitive environments. I have been involved in competitive swimming for 8 years and also enjoy the complexity and excitement of recreational soccer. Additionally, I have a musical background and play the Persian Tombak, piano, and drums.
            </p>
          </div>
          <img
            src="https://github.com/KoushaAm/Portfolio/blob/master/Screenshot%202023-05-28%20at%209.43.43%20PM.png?raw=true"
            alt="About Me"
            className="about-image"
            style={{ width: "400px", height: "auto" , marginLeft: "40px", marginRight:"40px"}}
          />
        </div>
      </section>

      <section id="Academics" className="section">
        <div className="education-content" style={{ lineHeight: "1.2" }}>
          <h1 style={{ textAlign: 'center' }}><strong>Education</strong></h1>
          <div className="education-item">
            <p style={{ marginLeft: '20px', fontSize: '25px', textAlign: 'left' }}><strong>Computer Science BSc</strong></p>
            <p style={{ marginLeft: '50px', textAlign: 'left' }}>Simon Fraser University</p>
            <p style={{ marginLeft: '50px', textAlign: 'left' }}>GPA: (A) 3.92/4.33</p>
            <p style={{ marginLeft: '50px', textAlign: 'left' }}>Expected Graduation: December 2025</p>
          </div>
          <div className="education-item" style={{ lineHeight: "1.2" }}>
            <h1 style={{ marginTop: '0px', marginLeft: '20px', textAlign: 'left' }}>Academic Objectives</h1>
            <p style={{ marginTop: '0px', marginLeft: '20px', textAlign: 'left' }}>My academic objectives are to pursue a graduate degree in Computer Science with a focus on Machine Learning studies.</p>
            <p style={{ marginTop: '0px', marginLeft: '20px', textAlign: 'left' }}>I plan to achieve this goal after gaining practical industry skills through co-op and full-time software development/engineering positions.</p>
          </div>
        </div>
      </section>

      <section id="Skills" className="section">
        <h2>Skills</h2>
        {/* Your content for the Skills section */}
      </section>

      <section id="Experience" className="section">
        <h2>Experience</h2>
        {/* Your content for the Experience section */}
      </section>

      <section id="Projects" className="section">
        <h2>Projects</h2>
        {/* Your content for the Projects section */}
      </section>

      <section className="section" id="Contact">
        <div className="section-box contact-box">
          <h1>Contact</h1>
          <div className="contact-content">
            <div className="contact-item">
              <a href="https://www.linkedin.com/in/kousha-amouzesh-b31445232/" className="link" style={{ textAlign: 'left' }}>
                <p>Linkedin</p>
              </a>
              <p style={{ textAlign: 'left' }}>koushaamouzesh@gmail.com</p>
            </div>
            <div className="contact-item">
              <a href="https://github.com/KoushaAm?tab=overview&from=2023-05-01&to=2023-05-28" className="link" style={{ textAlign: 'left' }}>
                <p style={{ textAlign: 'left' }}>Github</p>
              </a>
              <p style={{ textAlign: 'left' }}>604-782-2974</p>
              <p style={{ textAlign: 'left' }}>Vancouver, B.C., Canada</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
