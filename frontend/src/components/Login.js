import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';
import Header from './Header';
import Footer from './Footer';

const Login = () => {
  const [form, setForm] = useState({ userId: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <div className="auth-page">
      <Header />
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
