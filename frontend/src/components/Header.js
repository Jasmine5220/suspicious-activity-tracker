import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="/login">Login/SignUp</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
