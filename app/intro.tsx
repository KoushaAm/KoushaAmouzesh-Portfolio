import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/intro.css'; // or wherever you put the CSS

export default function Intro() {
    const [backgroundColor, setBackgroundColor] = useState<string>('black');
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [showArrow, setShowArrow] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);

        // Hide arrow when scrolling away from hero section
        const handleScroll = () => {
            const heroSection = document.getElementById('Intro');
            if (heroSection) {
                const rect = heroSection.getBoundingClientRect();
                const isInView = rect.bottom > 100;
                setShowArrow(isInView);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleArrowClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        const section = document.getElementById('AboutMe');
        if (section) {
            const headerHeight = document.querySelector('header')?.clientHeight || 0;
            window.scrollTo({
                top: section.offsetTop - headerHeight,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section id="Intro" className="hero-section" style={{ backgroundColor, alignContent: "center" }}>
            <div className="wrapper">
                <div style={{ alignContent: "center" }} className={`typing-demo ${isVisible ? 'visible' : ''}`}>
                    <strong>Kousha Amouzesh</strong>
                </div>
                <div className={`typing-demo-2 ${isVisible ? 'visible' : ''}`}>
                    I am a software engineer 💻
                </div>
                {/* Arrow only shows when in hero section */}
                {showArrow && (
                    <div
                        style={{ marginTop: "20px", cursor: "pointer" }}
                        className="arrow"
                        onClick={handleArrowClick}
                        aria-label="Scroll to About Me"
                        tabIndex={0}
                        role="button"
                        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') handleArrowClick(e as any); }}
                    ></div>
                )}
            </div>
        </section>
    );
}