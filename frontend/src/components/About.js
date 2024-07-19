import React from 'react';
import './About.css';
import Header from './Header';
import Footer from './Footer';

const About = () => {
  return (
    <div className="about-page">
      <Header />
      <div className="about-content">
        <div className="about-flicker-box">
          <h1>About 'EyeOn'</h1>
          <p className="about-main-content">
            EyeOn is a state-of-the-art application designed to detect suspicious activities such as fire outbursts, smoke detection, and intrusions using YOLOv8. Our advanced algorithms ensure real-time monitoring and alerting to keep you safe.
          </p>
          <h2>Features</h2>
          <p className="about-main-content">
            1. Real-time monitoring of surveillance cameras.<br />
            2. Instant alerts for detected suspicious activities.<br />
            3. Detailed logging and reporting of events.<br />
            4. User-friendly interface for easy navigation.<br />
            5. High accuracy and low false-positive rates.
          </p>
          <h2>Our Mission</h2>
          <p className="about-main-content">
            Our mission is to provide top-notch security solutions that leverage the latest advancements in artificial intelligence to ensure safety and peace of mind for our users. We are committed to innovation, reliability, and excellence in everything we do.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
