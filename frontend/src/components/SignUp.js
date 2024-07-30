import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';
import Header from './Header';
import Footer from './Footer';

const SignUp = () => {
  const [form, setForm] = useState({ referenceId: '', password: '', confirmPassword: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ referenceId: form.referenceId, password: form.password })
    });
    const result = await response.json();
    setMessage(result.message);
  };

  return (
    <div className="auth-page">
      <Header />
      <div className="auth-content">
        <div className="auth-form-box">
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="referenceId"
              value={form.referenceId}
              onChange={handleChange}
              placeholder="Reference ID"
              required
            />
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Create Password"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              required
            />
            <button type="submit">Sign Up</button>
          </form>
          <div className="auth-links">
            <p>Already have an account? <Link to="/login">Login</Link></p>
          </div>
          {message && <p>{message}</p>}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
