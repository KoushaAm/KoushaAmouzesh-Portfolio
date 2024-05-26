import React, { useState } from 'react';
import '../styles/page.css';
import '../styles/skills.css';
import javaIcon from '../styles/logos/java-icon-256x256-k4ufhihr.png';
import pythonIcon from '../styles/logos/python-icon.png';
import javascriptIcon from '../styles/logos/js-icon.png';
import cIcon from '../styles/logos/c-icon.png';
// import cppIcon from '../styles/logos/cpp-icon.png';
// import rIcon from '../styles/logos/r-icon.png';
// import htmlIcon from '../styles/logos/html-icon.png';
// import cssIcon from '../styles/logos/css-icon.png';
// import nodejsIcon from '../styles/logos/nodejs-icon.png';
// import reactIcon from '../styles/logos/react-icon.png';
// import nextjsIcon from '../styles/logos/nextjs-icon.png';
// import ejsIcon from '../styles/logos/ejs-icon.png';
// import pytorchIcon from '../styles/logos/pytorch-icon.png';
// import tensorflowIcon from '../styles/logos/tensorflow-icon.png';
// import firebaseIcon from '../styles/logos/firebase-icon.png';
// import webapiIcon from '../styles/logos/webapi-icon.png';
// import leadershipIcon from '../styles/logos/leadership-icon.png';
// import teamworkIcon from '../styles/logos/teamwork-icon.png';
// import planningIcon from '../styles/logos/planning-icon.png';
// import publicSpeakingIcon from '../styles/logos/public-speaking-icon.png';
// import communicationIcon from '../styles/logos/communication-icon.png';
// import agileIcon from '../styles/logos/agile-icon.png';
// import farsiIcon from '../styles/logos/farsi-icon.png';
// import teachingIcon from '../styles/logos/teaching-icon.png';



const slides = [
    {
        title: 'Programming Languages',
        skills: [
            { title: 'Java', imageUrl: javaIcon.src },
            { title: 'Python', imageUrl: pythonIcon.src },
            { title: 'JavaScript', imageUrl: javascriptIcon.src },
            // { title: 'C', imageUrl: cIcon },
        ],
    },
    {
        title: 'Libraries',
        skills: [
            { title: 'React.js', imageUrl: "reactIcon" },
            { title: 'Node.js', imageUrl: "nodejsIcon" },
            // Add more libraries here
        ],
    },
    {
        title: 'Tools',
        skills: [
            // Add tool skills here
        ],
    },
    {
        title: 'Soft Skills',
        skills: [
            // { title: 'Leadership', imageUrl: leadershipIcon },
            // { title: 'Teamwork', imageUrl: teamworkIcon },
            // Add more soft skills here
        ],
    },
];

export default function Skills() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrevClick = () => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };
    const handleNextClick = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    return (
        <section id="Skills" className="skill-section">
            <div className="skills-section">
                <h2 className="skills-heading">Skills</h2>
                <h3 className="skills-category">{slides[currentSlide].title}</h3>
                <div className="skills-grid">
                    {slides[currentSlide].skills.map((skill, index) => (
                        <div key={index} className="skill-item">
                            <img src={skill.imageUrl} alt={skill.title} className="skill-icon" />
                            <span className="skill-name"><strong>{skill.title}</strong></span>
                        </div>
                    ))}
                </div>
                <div className="skills-navigation">
                    <button onClick={handlePrevClick}>&lt; Previous</button>
                    <button onClick={handleNextClick}>Next &gt;</button>
                </div>
            </div>
        </section>
    );
}
