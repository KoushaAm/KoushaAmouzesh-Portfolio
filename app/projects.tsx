import React from 'react';
import { metadata } from './layout';
import { useState, useEffect } from 'react';
import '../styles/page.css';

export default function Projects() {

    const [backgroundColor, setBackgroundColor] = useState<string>('black');

    
    return (
        <section id="Projects" className="section-project" style={{ backgroundColor , marginTop: "0px", marginBottom:"0px"}}>
          
          <h2 style = {{fontSize:"60px", marginLeft: "40px"}}><strong>Projects</strong></h2>

          <div className="slideshow-container">

          
          <div className="project-card slide active">
              <h2>Facial Key Point Detection (Transfer Learning)</h2>
              <img src="https://github.com/KoushaAm/KoushaAmouzesh-Portfolio/blob/main/Facial%20KP%20Detection.png?raw=true" alt="Job Seeking Platform" className="project-image" />
              <p>With the concept of Transfer Learning I trained a ResNet Network with a dataset of image. The process consists of data cleaning and labling in addition to model training and validation</p>
              <a href="https://github.com/KoushaAm/FaicialKeyPointDetection-LearningPhase">
                <button>Learn More</button>
              </a>
          </div>

          <div className="project-card slide active">
              <h2>Party-Nav</h2>
              <img src="https://user-images.githubusercontent.com/67440795/252758463-29ce8d6e-a6f4-40f9-ae0f-63c774fabb1d.png" alt="Job Seeking Platform" className="project-image" />
              <p>Created social networking website with React and Node.js for people in Vancouver to find or announce parties and talk to friends about the events in real-time chatroom using Firebase</p>
              <a href="https://github.com/KoushaAm/PartyNav-react">
                <button>Learn More</button>
              </a>
            </div>

            <div className="project-card slide active">
              <h2>Job Seeking Platform</h2>
              <img src="https://user-images.githubusercontent.com/67440795/241589813-a326679b-9c23-4e99-aa57-4be48f5f3502.png" alt="Job Seeking Platform" className="project-image" />
              <p>A website where users can search for jobs at their location and save or apply for their desired jobs. A fully working database to keep track of job records.</p>
              <a href="https://github.com/KoushaAm/JobSearch">
                <button>Learn More</button>
              </a>
            </div>

            <div className="project-card slide">
              <h2>Hand-Written Digit Recognizer</h2>
              <img src="https://github.com/KoushaAm/KoushaAmouzesh-Portfolio/blob/main/handwriter.png?raw=true" className="project-image" />
              <p>A deep learning model with pytorch - built a Convolutional neural network that is trained on hand wirtten images to predict a user-drawn digit on a React.js web app.</p>
              <a href="https://github.com/KoushaAm/Handwritten-Digit-Recognizer">
                <button>Learn More</button>
              </a>
            </div>

            <div className="project-card slide">
              <h2>Scam Email Detector</h2>
              <img src="https://github.com/KoushaAm/KoushaAmouzesh-Portfolio/blob/main/scamDetector.png?raw=true" className="project-image" />
              <p>A deep learning model with Tensorflow - built a Natural Langauge Processing (NLP) model that is trained on scam and non-scam raw dataset to predict the liklihood of the inputed email on a website</p>
              <a href="https://github.com/KoushaAm/SpamEmailDetector-NLP">
                <button>Learn More</button>
              </a>
            </div>

            <div className="project-card slide">
              <h2>Math2Latex</h2>
              <img src="https://github.com/KoushaAm/KoushaAmouzesh-Portfolio/blob/main/Math2Latex.png?raw=true" className="project-image" />
              <p>Uses deep learning CNN model with PyTorch to predict the mathematical symbol and predict upon the input image.</p>
              <a href="https://github.com/KoushaAm/Math2Latex">
                <button>Learn More</button>
              </a>
            </div>

            <div className="project-card slide">
              <h2>Survey Manager</h2>
              <img src="https://github.com/KoushaAm/KoushaAmouzesh-Portfolio/blob/main/survey.png?raw=true" className="project-image" />
              <p>A Java-based windows application to manage the created survey by users. The application provides users with opportunities to collect data from their custom surveys and edit them as desired</p>
              <a href="https://github.com/KoushaAm/SurveyManager">
                <button>Learn More</button>
              </a>
            </div>

            <div className="project-card slide">
              <h2>Path Finding Algorithm Visualization</h2>
              <img src="https://user-images.githubusercontent.com/67440795/215621916-7579fa95-db66-4c12-952d-21064264bc0c.png" className="project-image" />
              <p>A C++ program to find the shortest path between two points in an input image. The app contains comprehensive unit testing and an OOP structure of various common data structures</p>
              <a href="https://github.com/KoushaAm/Path-Finding">
                <button>Learn More</button>
              </a>
            </div>

            <div className="project-card slide">
              <h2>Food Prediction Model</h2>
              <img src="https://github.com/KoushaAm/KoushaAmouzesh-Portfolio/blob/main/foodPred.png?raw=true" className="project-image" />
              <p>Built a CNN model on TensorFlow to predict the name of 10 different dishes based on their images. The model is trained on 10,000 images</p>
              <a href="https://github.com/KoushaAm/Deeplearning">
                <button>Learn More</button>
              </a>
            </div>

            <div className="project-card slide">
              <h2>Word Sudoku App</h2>
              <img src="https://github.com/KoushaAm/KoushaAmouzesh-Portfolio/blob/main/sudoku.png?raw=true" style={{ height: "200px" }} />
              <p>Created a Java-based Android Sudoku game with multiple language levels and modes, utilizing a vast word database for translations.</p>
              <a href="https://github.com/KoushaAm/WordSudoku">
                <button>Learn More</button>
              </a>
            </div>

            <div className="project-card slide">
              <h2>Deep Learning</h2>
              <img src="https://github.com/KoushaAm/KoushaAmouzesh-Portfolio/blob/main/deeplearning.png?raw=true" style={{ height: "200px" }} />
              <p>I have also worked on several other multi-class &amp; Binary classification projects with raw and processed data using TensorFlow</p>
              <a href="https://github.com/KoushaAm/Deeplearning">
                <button>Learn More</button>
              </a>
            </div>
          </div>
        
    </section>
    )
}
                