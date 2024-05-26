//  my experience section
import React from 'react';
import { metadata } from './layout';
import '../styles/experience.css'



export default function Experience() {
  const logo_forgeahead = "https://media.licdn.com/dms/image/C4D0BAQGspzJE3XyRzw/company-logo_200_200/0/1643298805986/forgeahead_solutions_logo?e=1723075200&v=beta&t=03-WDQsd-NA_2op6ozpI0utlrpIOXl1qszUVylkB4C0"
  const logo_teamOrange = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAA1BMVEX/XgA92nntAAAASElEQVR4nO3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIC3AcUIAAFkqh/QAAAAAElFTkSuQmCC"
  return (
    <section className= 'section-experience' id="Experience">
      {/* at smaller screen decrease header size */}
        
        <h1 >

            <strong>Experience</strong>
        </h1>

        <div className="timeline">
            <div className="container left">
                <div className="content">
                  <div style ={{display: "flex"}}>
                    <img src={logo_forgeahead} alt="forgeahead" style={{width: "50px", height: "50px",borderRadius: "50px",  marginRight: "10px", marginBottom: "10px"}}></img>
                    <h4 style = {{ marginTop: "10px"}}><strong>Forgeahead Solutions Inc.</strong></h4>
                  </div>
                  <h2 style = {{color: "orange"}}>October 2023 - August 2024</h2>
                  <h4 ><strong>Machine Learning Engineer Co-op</strong></h4>
                    <ul className="bullet-list" style = {{marginTop: "10px"}}>
                      <li>Applied transfer learning methods for training image classification models</li>
                      <li>Fine-tuned Image deffusion and LLM models according to business requirements</li>
                      <li>Took part in the deployment of image deffusion models on AWS Sagemaker and the MLOps workflow</li>
                    </ul>
                </div>
            </div>
            <div className="container right">
            <div className="content">
                  <div style ={{display: "flex"}}>
                    <img src={logo_teamOrange} alt="Team Orange" style={{width: "40px", height: "40px", borderRadius: "50px", marginBottom: "10px", marginRight: "10px"}}></img>
                    <h4 ><strong>Surge Team Orange</strong></h4>
                  </div>
                  <h2 style = {{color: "orange"}}>October 2023 - August 2024</h2>
                  <h4><strong>Technical Lead: Full-Stack Developer</strong></h4>
                    <ul className="bullet-list" style = {{marginTop: "10px"}}>
                      <li>Designed a social platform for SFU students to join SFU's official clubs and connect with their peers</li>
                      <li>Developed a text-classification pipeline to categorize SFU clubs data for search optimization</li>
                      <li>Implemented a Node.js Backened to conduct user authentification, club search and users' chats</li>
                      <li>Managed the GitHub repository including branches and merge requests invoked by other developers</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  );
}
