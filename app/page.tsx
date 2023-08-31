'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import Header from './header';
import '../styles/page.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faUniversity, faStar, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Analytics } from '@vercel/analytics/react';
import {styles} from './styles'




const Home: React.FC = () => {

  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [backgroundColor, setBackgroundColor] = useState<string>('black');

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const calculateBackgroundColor = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollableDistance = documentHeight - windowHeight;

      const percentage = (scrollPosition / scrollableDistance) * 100;
      const rateOfChange = 400;
      const colorValue = Math.round((percentage / rateOfChange) * 255);
      const backgroundColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;

      setBackgroundColor(backgroundColor);
    };

    calculateBackgroundColor();
  }, [scrollPosition]);

  const sections = [
    { id: 'Intro', title: 'Home'},
    { id: 'AboutMe', title: 'About Me' },
    { id: 'Education', title: 'Education' },
    { id: 'Skills', title: 'Skills' },
    // { id: 'Experience', title: 'Experience' },
    { id: 'Projects', title: 'Projects' },
    {id : 'Resume', title: 'Resume'},
    { id: 'Contact', title: 'Contact' },
  ];

  useEffect(() => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const slideInterval = setInterval(nextSlide, 5000);

    function nextSlide() {
      if (slides[currentSlide]) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
      }
    }

    return () => clearInterval(slideInterval);
  }, []);

  

  return (
    <main style = {{backgroundColor}}>
      <Analytics />

      <link href="https://fonts.googleapis.com/css?family=Cardo:400,700|Oswald" rel="stylesheet"></link>
      <Header />
      <section id="Intro" className="hero-section" style={{ backgroundColor , alignContent: "center"}}>
        <div className="wrapper">

          <div style = {{alignContent: "center" , marginBottom: "15px"}} className={`typing-demo ${isVisible ? 'visible' : ''}`}>
            <strong>Kousha Amouzesh</strong>
          </div>
          <div  className={`typing-demo-2 ${isVisible ? 'visible' : ''}`}>
            I am a software developer  💻 
          </div>
          <div className='arrow'></div>
          
        </div>

        
        
      </section>

      <section id="AboutMe" className="section" style={{ backgroundColor }}>
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
          <div className="image-container">
            <img
              src="https://github.com/KoushaAm/Portfolio/blob/master/Screenshot%202023-05-28%20at%209.43.43%20PM.png?raw=true"
              alt="About Me"
              className="about-image"
            />
          </div>
        </div>
      </section>

      <section id="Education" className="section" style={{ backgroundColor }}>
        <div className="education-content" style={{ lineHeight: "1.2", padding: "20px" }}>
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
    </section>






      
      <section id="Skills" className="section" style={{ backgroundColor }}>
        <div className="skills-section">
          <h2 className="skills-heading">Skills</h2>
          <div className="skills-table">
            <div className="skills-column">
              <h3 className="skills-category">Languages</h3>
              <ul className="skills-list">
                <li>
                  <span className="skill-name">Java</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style= {{width: "99%"}}></div>
                  </div>
                </li>
                <li>
                  <span className="skill-name">Python</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style= {{width: "90%"}}></div>
                  </div>
                </li>
                <li>
                  <span className="skill-name">JavaScript</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style= {{width: "85%"}}></div>
                  </div>
                </li>
                <li>
                  <span className="skill-name">C</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style= {{width: "60%"}}></div>
                  </div>
                </li>
                <li>
                  <span className="skill-name">C++</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style= {{width: "80%"}}></div>
                  </div>
                </li>
                <li>
                  <span className="skill-name">R</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style= {{width: "80%"}}></div>
                  </div>
                </li>
                <li>
                  <span className="skill-name">HTML</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style= {{width: "100%"}}></div>
                  </div>
                </li>
                <li>
                  <span className="skill-name">CSS</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style= {{width: "80%"}}></div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="skills-column">
              <h3 className="skills-category">Tools</h3>
              <ul className="skills-list">
              <li>
                  <span className="skill-name">Node.js</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style= {{width: "95%"}}></div>
                  </div>
                </li>
                <li>
                  <span className="skill-name">React.js</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style= {{width: "85%"}}></div>
                  </div>
                </li>
                <li>
                  <span className="skill-name">Next.js</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style= {{width: "80%"}}></div>
                  </div>
                </li>
                <li>
                  <span className="skill-name">EJS</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style= {{width: "95%"}}></div>
                  </div>
                </li>
                <li>
                  <span className="skill-name">PyTorch</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style= {{width: "60%"}}></div>
                  </div>
                </li>
                <li>
                  <span className="skill-name">Tensorflow</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style= {{width: "75%"}}></div>
                  </div>
                </li>
                <li>
                  <span className="skill-name">Firebase</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style= {{width: "85%"}}></div>
                  </div>
                </li>
                <li>
                  <span className="skill-name">Web APIs</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style= {{width: "99%"}}></div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="skills-column">
              <h3 className="skills-category">Soft Skills</h3>
              <ul className="skills-list">
              <li>
                  <span className="skill-name">Leadership</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style= {{width: "90%"}}></div>
                  </div>
                </li>
                <li>
                  <span className="skill-name">Teamwork</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style= {{width: "99%"}}></div>
                  </div>
                </li>
                <li>
                  <span className="skill-name">Planning</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style= {{width: "95%"}}></div>
                  </div>
                </li>
                <li>
                  <span className="skill-name">Public Speaking</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style= {{width: "99%"}}></div>
                  </div>
                </li>
                <li>
                  <span className="skill-name">Communication</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style= {{width: "99%"}}></div>
                  </div>
                </li>
                <li>
                  <span className="skill-name">Agile Development</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style= {{width: "95%"}}></div>
                  </div>
                </li>
                <li>
                  <span className="skill-name">Fluent in Farsi</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style= {{width: "100%"}}></div>
                  </div>
                </li>
                <li>
                  <span className="skill-name">Teaching</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style= {{width: "80%"}}></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </section>

      {/* <section id="Experience" className="section" style={{ backgroundColor }}>
      <h2 className="skills-heading">Experience</h2>
       <p> to be completed ...</p>
      </section> */}

      <section id="Projects" className="section-project" style={{ backgroundColor , marginTop: "0px", marginBottom:"0px"}}>
          
          <h2 style = {{fontSize:"60px", marginLeft: "40px"}}><strong>Projects</strong></h2>

          <div className="slideshow-container">

          

          <div className="project-card slide active">
              <h2>Party-Nav</h2>
              <img src="https://user-images.githubusercontent.com/67440795/252758463-29ce8d6e-a6f4-40f9-ae0f-63c774fabb1d.png" alt="Job Seeking Platform" className="project-image" />
              <p>Created social networking website with React and Node.js for people in Vancouver to find or announce parties and talk to friends about the events in real-time chatroom using Firebase</p>
              <a href="https://github.com/KoushaAm/PartyNav-react">
                <button>Learn More</button>
              </a>
            </div>

            <div className="project-card slide active">
              <h2>Handwritten Digit Recognizer</h2>
              <p>Developed a Convolutional Neural Network AI model to identify numbers within images. Integrated the model into a React.js frontend, enabling users to draw numbers. The model's performance is visualized using an animated bar chart, to show AI's accuracy</p>
              <a href="">
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

    <section id="Resume" className="section" style={{ backgroundColor }}>
      <h1 style={{ fontSize: "40px", marginTop: "0px", marginLeft: "70px" }}>
        <strong>My Resume</strong>
        
      </h1>
      <div style={{ marginLeft: "70px", marginTop: "20px" }}>
      
        <a href="https://github.com/KoushaAm/KoushaAmouzesh-Portfolio/blob/main/resume-KoushaAmouzesh.pdf?raw=true" download>
          <FontAwesomeIcon icon={faDownload} style={{ marginRight: "8px" }} />
          Download Resume
        </a>
      </div>
      <img src="https://github.com/KoushaAm/KoushaAmouzesh-Portfolio/blob/main/resume.png?raw=true" style={{ padding: "80px" }}></img>
      
</section>



      <section className="section-contact" id="Contact" style={{ backgroundColor, marginTop: "0px"}}>
      <div className="container-contact">
        <h1>Contact</h1>
        <div className="contact-content">
          <div className="contact-item">

            <p style = {{marginBottom: "0px"}}>
              <FontAwesomeIcon icon={faEnvelope} />
              <span  style = {{marginLeft: "10px"}}>koushaamouzesh@gmail.com</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} />
              <span  style = {{marginLeft: "10px"}}>604-782-2974</span>
            </p>

            <a href="https://www.linkedin.com/in/kousha-amouzesh-b31445232/" style = {{marginBottom: "30px"}} className="link">
              <FontAwesomeIcon icon={faLinkedin} />
              <span style = {{marginLeft: "10px"}}>LinkedIn</span>
            </a>

            <a href="https://github.com/KoushaAm?tab=overview&from=2023-05-01&to=2023-05-28" className="link">
              <FontAwesomeIcon icon={faGithub} />
              <span  style = {{marginLeft: "10px"}}>GitHub</span>
            </a>
            

            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span  style = {{marginLeft: "10px"}}>Vancouver, B.C., Canada</span>
            </p>

            
          </div>
            
        </div>
      </div>
    </section>


    </main>
  );
};

export default Home;
