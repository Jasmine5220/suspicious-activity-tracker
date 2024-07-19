import React, { useState, useEffect, useRef } from 'react';
import './Page1.css';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';

const Page1 = () => {
  const [numbers, setNumbers] = useState([]);
  const [threat, setThreat] = useState('');
  const videoRef = useRef(null);

  const fetchNumbersAndThreat = async () => {
    try {
      const numbersResponse = await axios.get('http://127.0.0.1:5000/api/numbers');
      setNumbers(numbersResponse.data);
      const threatResponse = await axios.get('http://127.0.0.1:5000/api/threat');
      setThreat(threatResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchNumbersAndThreat();
    const interval = setInterval(fetchNumbersAndThreat, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          videoRef.current.srcObject = stream;
        })
        .catch(error => {
          console.error('Error accessing camera:', error);
        });
    }
  }, []);

  return (
    <div className="page1-container">
      <Header />
      <div className="page1-header">
        <h1>Suspicious Activity Tracker</h1>
        <p>Uncover anomalies, thwart fraud: Your bank's vigilant guardian against suspicious activity.</p>
      </div>
      <div className="page1-content">
        <div className="page1-video-stream">
          <video ref={videoRef} autoPlay muted></video>
        </div>
        <div className="page1-number-box">
          {numbers.map((number, index) => (
            <div key={index} className="page1-number-item">
              {number}
            </div>
          ))}
        </div>
      </div>
      <div className="page1-controls">
        <button className="page1-generate-btn" onClick={fetchNumbersAndThreat}>Generate</button>
        <input type="text" value={threat} readOnly className="page1-threat-display" />
      </div>
      <Footer />
    </div>
  );
};

export default Page1;
