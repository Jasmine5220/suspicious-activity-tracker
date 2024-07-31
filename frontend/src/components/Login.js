import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './Auth.css';
import Header from './Header';
import Footer from './Footer';

const Login = () => {
  const [form, setForm] = useState({ userId: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate= useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://127.0.0.1:5000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    });
    const result = await response.json();
    setMessage(result.message);
    if (response.ok){
      navigate('/1');
    }
  };

  return (
    <div className="auth-page">
      <Header/>
      <div className="auth-content">
        <div className="auth-form-box">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="userId"
              value={form.userId}
              onChange={handleChange}
              placeholder="User ID"
              required
            />
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
            <button type="submit">Login</button>
          </form>
          <div className="auth-links">
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
          </div>
          {message && <p>{message}</p>}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
