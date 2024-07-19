import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="/login">Login/SignUp</a></li>
          <li><a href="/page1">Page1</a></li>
          <li><a href="/page2">Page2</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
