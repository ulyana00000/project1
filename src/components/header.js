import React from 'react';
import '../styles/header.css';

const Header = ({ logo, subtitle, menu }) => (
  <header className="header">
    <div className="logo">
      <h1>{logo}</h1>
      <p>{subtitle}</p>
    </div>
    <nav>
      <ul className="menu">
        {menu.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
