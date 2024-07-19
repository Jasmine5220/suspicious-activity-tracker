import React, { useEffect } from 'react';
import './LandingPage.css';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  useEffect(() => {
    const letters = document.querySelectorAll('.content h1 span');

    const animateLetters = () => {
      letters.forEach((letter, i) => {
        letter.style.animation = 'none';
        void letter.offsetWidth; // Trigger a reflow
        letter.style.animation = `popUp 0.5s ${i * 0.05}s forwards`;
      });
    };

    animateLetters();
    const interval = setInterval(animateLetters, 5000);

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  const splitText = (text) => {
    return text.split('').map((char, i) => <span key={i}>{char}</span>);
  };

  return (
    <div className="landing-page">
      <Header />
      <div className="content">
        <h1>{splitText('EyeOn - ')}</h1>
        <h1>{splitText('Suspicious ')}</h1>
        <h1>{splitText('Activity ')}</h1>
        <h1>{splitText('Tracker')}</h1>
        <Link to="/about">
          <button className="explore-btn">Explore →</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
