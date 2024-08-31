import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">ImagineDraw</Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/prompt-to-drawing">Prompt to Drawing</Link></li>
          <li><Link to="/image-to-drawing">Image to Drawing</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
