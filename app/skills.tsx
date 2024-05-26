
import React, { useState, useEffect} from 'react';


// import '../styles/page.css';
import '../styles/skills.css';
import javaIcon from '../styles/logos/java-icon-256x256-k4ufhihr.png';
import pythonIcon from '../styles/logos/python-icon.png';
import javascriptIcon from '../styles/logos/js-icon.png';
import cIcon from '../styles/logos/c-icon.png';
import rIcon from '../styles/logos/r-icon.png';
import htmlIcon from '../styles/logos/html-icon.png';
import cppIcon from '../styles/logos/cpp-icon.png';
import cssIcon from '../styles/logos/css-icon.png';
import sqlIcon from '../styles/logos/sql-icon.png';
import tsIcon from '../styles/logos/ts-icon.png';
import reactIcon from '../styles/logos/react-icon.png';
import nodeIcon from '../styles/logos/node-icon.png';

import nextjsIcon from '../styles/logos/next-icon.png';
import pytorchIcon from '../styles/logos/pytorch-icon.png';
import tensorflowIcon from '../styles/logos/tensorflow-icon.png';
import langchainIcon from '../styles/logos/langchain-icon.png';
import mongodbIcon from '../styles/logos/mongodb-icon.png';
import firebaseIcon from '../styles/logos/firebase-icon.png';
import flaskIcon from '../styles/logos/flask-icon.png';
import gitIcon from '../styles/logos/git-icon.png';
import sagemakerIcon from '../styles/logos/sagemaker-icon.png';
import dynamoDBIcon from '../styles/logos/aws-dynamoDB.png'
import anacondaIcon from '../styles/logos/anaconda-icon.png';
import dockerIcon from '../styles/logos/docker-icon.png';
import huggingfaceIcon from '../styles/logos/huggingface-icon.png';
import jiraIcon from '../styles/logos/jira-icon.png';
import bitbucketIcon from '../styles/logos/bitbucket-icon.png';
import androidStudioIcon from '../styles/logos/androidStudio-icon.png';
import vscode from '../styles/logos/vscode-icon.png';
import intellijIcon from '../styles/logos/intellij-icon.png';
import pycharmIcon from '../styles/logos/pycharm-icon.png';
import tailwindIcon from '../styles/logos/tailwind-icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from "@fortawesome/fontawesome-svg-core";


const baseURL = 'https://github.com/KoushaAm/KoushaAmouzesh-Portfolio/blob/main/styles/logos/';

const slides = [
    {
        title: 'Programming Languages',
        skills: [
            { title: 'Java', imageUrl: `${baseURL}java-icon-256x256-k4ufhihr.png?raw=true` },
            { title: 'Python', imageUrl: `${baseURL}python-icon.png?raw=true` },
            { title: 'JavaScript', imageUrl: `${baseURL}js-icon.png?raw=true` },
            { title: 'C', imageUrl: `${baseURL}c-icon.png?raw=true` },
            { title: 'C++', imageUrl: `${baseURL}cpp-icon.png?raw=true` },
            { title: 'R', imageUrl: `${baseURL}r-icon.png?raw=true` },
            { title: 'SQL', imageUrl: `${baseURL}sql-icon.png?raw=true` },
            { title: 'TypeScript', imageUrl: `${baseURL}ts-icon.png?raw=true` },
            { title: 'HTML', imageUrl: `${baseURL}html-icon.png?raw=true` },
            { title: 'CSS', imageUrl: `${baseURL}css-icon.png?raw=true` },
        ],
    },
    {
        title: 'Libraries',
        skills: [
            { title: 'React.js', imageUrl: `${baseURL}react-icon.png?raw=true` },
            { title: 'Node.js', imageUrl: `${baseURL}node-icon.png?raw=true` },
            { title: 'Next.js', imageUrl: `${baseURL}next-icon.png?raw=true` },
            { title: 'Tailwind CSS', imageUrl: `${baseURL}tailwind-icon.png?raw=true` },
            { title: 'PyTorch', imageUrl: `${baseURL}pytorch-icon.png?raw=true` },
            { title: 'Tensorflow', imageUrl: `${baseURL}tensorflow-icon.png?raw=true` },
            { title: 'Langchain', imageUrl: `${baseURL}langchain-icon.png?raw=true` },
            { title: 'MongoDB', imageUrl: `${baseURL}mongodb-icon.png?raw=true` },
            { title: 'Firebase', imageUrl: `${baseURL}firebase-icon.png?raw=true` },
            { title: 'Flask', imageUrl: `${baseURL}flask-icon.png?raw=true` },
        ],
    },
    {
        title: 'Tools',
        skills: [
            { title: 'Git', imageUrl: `${baseURL}git-icon.png?raw=true` },
            { title: 'AWS Sagemaker', imageUrl: `${baseURL}sagemaker-icon.png?raw=true` },
            { title: 'AWS DynamoDB', imageUrl: `${baseURL}aws-dynamoDB.png?raw=true` },
            { title: 'Anaconda', imageUrl: `${baseURL}anaconda-icon.png?raw=true` },
            { title: 'Docker', imageUrl: `${baseURL}docker-icon.png?raw=true` },
            { title: 'Huggingface', imageUrl: `${baseURL}huggingface-icon.png?raw=true` },
            { title: 'Jira', imageUrl: `${baseURL}jira-icon.png?raw=true` },
            { title: 'Bitbucket', imageUrl: `${baseURL}bitbucket-icon.png?raw=true` },
            { title: 'VSCode', imageUrl: `${baseURL}vscode-icon.png?raw=true` },
            { title: 'IntelliJ', imageUrl: `${baseURL}intellij-icon.png?raw=true` },
            { title: 'PyCharm', imageUrl: `${baseURL}pycharm-icon.png?raw=true` },
            { title: 'Android Studio', imageUrl: `${baseURL}androidStudio-icon.png?raw=true` },
        ],
    }
];



export default function Skills() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [visible, setVisible] = useState(false);
    let touchStartX = 0;

    useEffect(() => {
        setVisible(true);
    }, [currentSlide]);

    const handlePrevClick = () => {
        setVisible(false); 
        setTimeout(() => {
            setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
            setVisible(true); 
        }, 500); 
    };

    const handleNextClick = () => {
        setVisible(false); 
        setTimeout(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
            setVisible(true); 
        }, 500); 
    };

    const handleTouchStart = (e) => {
        touchStartX = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        const touchEndX = e.touches[0].clientX;
        const touchDiff = touchStartX - touchEndX;
        if (touchDiff > 100) {
            handleNextClick();
        } else if (touchDiff < -100) {
            handlePrevClick();
        }
    };

    const handleMouseDown = (e) => {
        touchStartX = e.clientX;
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e) => {
        const touchEndX = e.clientX;
        const touchDiff = touchStartX - touchEndX;
        if (touchDiff > 100) {
            handleNextClick();
            resetMouseEvents();
        } else if (touchDiff < -100) {
            handlePrevClick();
            resetMouseEvents();
        }
    };

    const handleMouseUp = () => {
        resetMouseEvents();
    };

    const resetMouseEvents = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };

    return (
        <section
            id="Skills"
            className="skill-section"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onMouseDown={handleMouseDown}
        >
            <div className="skills-section">
                <h2 className="skills-heading"><strong>Skills</strong></h2>
                <h3 className="skills-category">{slides[currentSlide].title}</h3>

                <div className="skills-navigation">
                    <button onClick={handlePrevClick} className="navigation-button">
                        {/* <FontAwesomeIcon icon={faCircleChevronLeft} /> */}
                        <FontAwesomeIcon icon={faCircleChevronLeft as IconProp} />
                    </button>
                    <button onClick={handleNextClick} className="navigation-button">
                        {/* <FontAwesomeIcon icon={faCircleChevronRight} /> */}
                        <FontAwesomeIcon icon={faCircleChevronRight as IconProp} />

                    </button>
                </div>
                <div className="slide-indicators">
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            className={`slide-indicator ${index === currentSlide ? 'active' : ''}`}
                        />
                    ))}
                </div>
                <div className="skills-grid">
                    {slides[currentSlide].skills.map((skill, index) => (
                        <div key={index} className={`skill-item ${visible ? 'visible' : ''}`}>
                            <img src={skill.imageUrl} alt={skill.title} className="skill-icon" />
                            <span className="skill-name"><strong>{skill.title}</strong></span>
                        </div>
                    ))}
                </div>
            
            </div>
        </section>
    );
}