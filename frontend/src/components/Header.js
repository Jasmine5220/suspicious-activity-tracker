import React from 'react';
import './Header.css';

const Header = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <header className="header">
      <nav>
        <ul>
          {isLoggedIn ? (
            <li><a href="/page1">Watch</a></li>
          ) : (
            <li><a href="/login">Login/SignUp</a></li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
