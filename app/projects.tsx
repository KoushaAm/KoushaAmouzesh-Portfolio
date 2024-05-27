import React from 'react';
import { useState } from 'react';
import '../styles/projects.css'; // Import the CSS file

export default function Projects() {
    const [backgroundColor, setBackgroundColor] = useState('black');

    const projects = [
        {
            title: 'NewLink Social Platform',
            img: 'https://github.com/KoushaAm/KoushaAmouzesh-Portfolio/blob/main/app/assets/NewLink-image.png?raw=true',
            description: 'A platform for SFU newcomers to learn about the culture at SFU using fine-tuned Llama 3 chatbot and take part in social events organized by student volunteers.',
            link: 'https://github.com/KoushaAm/stormhacks-project-NewLink'
        },
        {
            title: 'Facial Key Point Detection',
            img: 'https://github.com/KoushaAm/KoushaAmouzesh-Portfolio/blob/main/Facial%20KP%20Detection.png?raw=true',
            description: 'With the concept of Transfer Learning I trained a ResNet Network with a dataset of images.',
            link: 'https://github.com/KoushaAm/FaicialKeyPointDetection-LearningPhase'
        },
        {
            title: 'Hand-Written Digit Recognizer',
            img: 'https://github.com/KoushaAm/KoushaAmouzesh-Portfolio/blob/main/handwriter.png?raw=true',
            description: 'A deep learning model with PyTorch - built a Convolutional neural network that is trained on handwritten images to predict a user-drawn digit on a React.js web app.',
            link: 'https://github.com/KoushaAm/Handwritten-Digit-Recognizer'
        },
        {
            title: 'Scam Email Detector',
            img: 'https://github.com/KoushaAm/KoushaAmouzesh-Portfolio/blob/main/scamDetector.png?raw=true',
            description: 'A deep learning model with TensorFlow - built a Natural Language Processing (NLP) model that is trained on scam and non-scam raw dataset to predict the likelihood of the inputted email on a website.',
            link: 'https://github.com/KoushaAm/SpamEmailDetector-NLP'
        },
        {
            title: 'Food Prediction Model',
            img: 'https://github.com/KoushaAm/KoushaAmouzesh-Portfolio/blob/main/foodPred.png?raw=true',
            description: 'Built a CNN model on TensorFlow to predict the name of 10 different dishes based on their images. The model is trained on 10,000 images.',
            link: 'https://github.com/KoushaAm/Deeplearning'
        },
        {
            title: 'Math2Latex',
            img: 'https://github.com/KoushaAm/KoushaAmouzesh-Portfolio/blob/main/Math2Latex.png?raw=true',
            description: 'Uses deep learning CNN model with PyTorch to predict the mathematical symbol and predict upon the input image.',
            link: 'https://github.com/KoushaAm/Math2Latex'
        },
        {
            title: 'Party-Nav',
            img: 'https://user-images.githubusercontent.com/67440795/252758463-29ce8d6e-a6f4-40f9-ae0f-63c774fabb1d.png',
            description: 'Created social networking website with React and Node.js for people in Vancouver to find or announce parties and talk to friends about the events in real-time chatroom using Firebase.',
            link: 'https://github.com/KoushaAm/PartyNav-react'
        },
        {
            title: 'Job Seeking Platform',
            img: 'https://user-images.githubusercontent.com/67440795/241589813-a326679b-9c23-4e99-aa57-4be48f5f3502.png',
            description: 'A website where users can search for jobs at their location and save or apply for their desired jobs. A fully working database to keep track of job records.',
            link: 'https://github.com/KoushaAm/JobSearch'
        },
        {
            title: 'Survey Manager',
            img: 'https://github.com/KoushaAm/KoushaAmouzesh-Portfolio/blob/main/survey.png?raw=true',
            description: 'A Java-based windows application to manage the created survey by users. The application provides users with opportunities to collect data from their custom surveys and edit them as desired.',
            link: 'https://github.com/KoushaAm/SurveyManager'
        },
        {
            title: 'Path Finding Illustrator',
            img: 'https://user-images.githubusercontent.com/67440795/215621916-7579fa95-db66-4c12-952d-21064264bc0c.png',
            description: 'A C++ program to find the shortest path on a map. The app contains comprehensive unit testing and an OOP structure.',
            link: 'https://github.com/KoushaAm/Path-Finding'
        },
        {
            title: 'Word Sudoku App',
            img: 'https://github.com/KoushaAm/KoushaAmouzesh-Portfolio/blob/main/sudoku.png?raw=true',
            description: 'Created a Java-based Android Sudoku game with multiple language levels and modes, utilizing a vast word database for translations.',
            link: 'https://github.com/KoushaAm/WordSudoku'
        }
    ];

    return (
        <section id="Projects" className="section-project" style={{ backgroundColor, marginTop: "0px", marginBottom: "0px" }}>
            <h1>Projects</h1>
            <div className="project-grid">
                {projects.map((project, idx) => (
                    <div key={idx} className="project-card">
                        <h2>{project.title}</h2>
                        <img src={project.img} alt={project.title} className="project-image" />
                        <p>{project.description}</p>
                        <a href={project.link}>
                            <button>Learn More</button>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
