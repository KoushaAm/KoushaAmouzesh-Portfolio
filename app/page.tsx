'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import Header from './header';
import '../styles/page.css';
import Intro from './intro';
import AboutMe from './aboutMe';
import Experience from './experience';
import Education from './education'
import Skills from './skills';
import Projects from './projects';
import Resume from './resume';
import Contact from './contact';
import { Analytics } from '@vercel/analytics/react';


const Home: React.FC = () => {

  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [backgroundColor, setBackgroundColor] = useState<string>('black');



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
      <Intro />

      <AboutMe />
    

      {/* <Experience /> */}

      
      <Education />
      
      <Skills />

      <Projects />

      <Resume />

      <Contact/>


    </main>
  );
};

export default Home;
