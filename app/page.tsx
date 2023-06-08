import React from 'react';
import Header from './header';
import '../styles/page.css'; // Import the CSS file for the Home component

const Home: React.FC = () => {
  return (
    <main>
      <Header />
      <section id="AboutMe" className="section">
        <div>
          <h1>Kousha Amouzesh</h1>
          <p>I am a 20-year-old Computer Science student at Simon Fraser University in Burnaby, British Columbia. Since I was young, I have been fascinated by the potential of computer science and mathematics, beginning by the first space ship game I made at 14. As I advance in my academic journey, I am consistently inspired by the projects that connect the endless world of mathematics with computer science. I am currently looking for a co-op position in the remainder of 2023.</p>
          <p>Aside from my passion for technology and academia, I am highly competitive and dedicated to sports. I have pursued competitive swimming for 8 years. Moreover, I have been actively engaged in recreational soccer, enjoying the complexity and thrill of the game. Besides, I grew up with musical instruments in hand, and I play the Persian Tombak, a bit of piano and drums.</p>
        </div>
      </section>

      <section id="Acedamics" className="section">
        <h2>Education</h2>
        {/* Your content for the Education section */}
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

      <section id="Contact" className="section">
        <h2>Contact</h2>
        {/* Your content for the Contact section */}
      </section>
    </main>
  );
};

export default Home;
