import React, { useEffect } from 'react';
import './LandingPage.css';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import ContactUs from './ContactUs';

const LandingPage = () => {
  useEffect(() => {
    const letters = document.querySelectorAll('.content h1 span');

    const animateLetters = () => {
      letters.forEach((letter, i) => {
        letter.style.animation = 'none';
        void letter.offsetWidth; 
        letter.style.animation = `popUp 0.5s ${i * 0.05}s forwards`;
      });
    };

    animateLetters();
    const interval = setInterval(animateLetters, 5000);

    return () => clearInterval(interval);
  }, []);

  const splitText = (text) => {
    return text.split('').map((char, i) => <span key={i}>{char}</span>);
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="landing-page">
      <Header />
      <div className="content" data-aos="fade-up">
        <h1>{splitText('EyeOn - ')}</h1>
        <h1>{splitText('Suspicious ')}</h1>
        <h1>{splitText('Activity ')}</h1>
        <h1>{splitText('Tracker')}</h1>
        <button className="explore-btn" onClick={scrollToAbout}>Explore →</button>
      </div>
      <About />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default LandingPage;
