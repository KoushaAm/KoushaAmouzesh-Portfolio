import React from 'react'
import '../styles/page.css';

export default function AboutMe() {
    return (
        <section id="AboutMe" className="about-section">
        <h1 style={{ marginLeft: "80px", fontSize: "60px" }}>
          <strong>About me...</strong>
        </h1>
        <div className="about-content">
          <div className="about-text" style={{ margin: "10px"}}>
            <p className="about-paragraph">
              I am a 20-year-old Computer Science student at Simon Fraser University in Burnaby, British Columbia. Since a young age, I have been fascinated by the potential of computer science and mathematics, starting with the first spaceship game I developed at the age of 14. As I progress in my academic journey, I am constantly inspired by projects that bridge the vast world of mathematics with computer science. Currently, I am actively seeking a co-op position for the remainder of 2023.
            </p>
            <p className="about-paragraph">
              Besides my passion for technology and academia, I have a strong drive for sports and thrive in competitive environments. I have been involved in competitive swimming for 8 years and also enjoy the complexity and excitement of recreational soccer. Additionally, I have a musical background and play the Persian Tombak, piano, and drums.
            </p>
          </div>
        </div>
      </section>
    )
}