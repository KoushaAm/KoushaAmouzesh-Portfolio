import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/page.css';

export default function Intro() {

    const [backgroundColor, setBackgroundColor] = useState<string>('black');
    const [isVisible, setIsVisible] = useState<boolean>(false);


    useEffect(() => {
        const timer = setTimeout(() => {
        setIsVisible(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);


    return (
        <section id="Intro" className="hero-section" style={{ backgroundColor , alignContent: "center"}}>
            <div className="wrapper">

            <div style = {{alignContent: "center"}} className={`typing-demo ${isVisible ? 'visible' : ''}`}>
                <strong>Kousha Amouzesh</strong>
            </div>
            <div  className={`typing-demo-2 ${isVisible ? 'visible' : ''}`}>
                I am a software engineer 💻 
            </div>
            <div style = {{marginTop: "20px"}} className='arrow'></div>
            
            </div>
            
        </section>
    );
}