import React from 'react'
import '../styles/about.css'

export default function AboutMe() {
    return (
        <section id="AboutMe" className="about-section">
        <h1 >
                <strong>About Me</strong>
                
        </h1>
        <div className="about-content">
          <div className="about-text" >
            <p className="about-paragraph">
              I am a 22-year-old Software Engineer and a Computer Science student at Simon Fraser University in Burnaby, British Columbia. I am currently active as an ML engineer at Forgeahead Solutions and Intend to dive deeper into the world of Machine Learning by seeking more opportunites in both fields of development and research.
            </p>
            <p className="about-paragraph">
              Besides my passion for technology and academia, I've been active in competitive swimming and find joy in recreational soccer. Additionally, I've pursued hobbies like drawing and music, mastering multiple percussion instruments along the way.
            </p>
          </div>
        </div>
      </section>
    )
}