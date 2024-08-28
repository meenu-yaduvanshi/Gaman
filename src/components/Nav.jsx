import React, { useState } from 'react';
import '../style/nav.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <nav className='nav-div'>
       <button> <a href="">Discover</a></button>
       <button><a href="">Services</a></button>
        <div class="zoom"><img className="gaman-logo-image" src="../src/assets/gamanLogoBlue.png" alt="" /></div>
        <button><a href="">Kutuhal</a></button>
        <button><a href="">Connect</a></button>
      </nav>
    <div className='nav-container'>
      <div className="logo">
        <img className="gaman-logo-image" src="../src/assets/gamanLogoBlue.png" alt="Logo" />
      </div>
      <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
        <li><a href="">Discover</a></li>
        <li><a href="">Services</a></li>
        <li><a href="">Kutuhal</a></li>
        <li><a href="">Connect</a></li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
    </>
  );
};

export default Nav;
