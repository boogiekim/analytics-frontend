import React from 'react';
import './Nav.css';
import logo from '../../assets/images/asc_logo_color.png';


const Nav = () => {
  return (
    <nav className="navigation-bar">
      <div className="logo">
        <a href="/">
            <img src={logo} alt="logo" aria-hidden="true" decoding="async" />
        </a>
      </div>
      <div className="navigation-links">
        {/* <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/industries">Industries</a>
        <a href="/resources">Resources</a> */}
        <a href='https://ascendingdc.com/'>
            <button type="button" className="btn btn-primary btn-lg" style={{ fontWeight: 'bold', backgroundColor: '#03a9f4' }}>Contact Us</button>
        </a>
      </div>
    </nav>
  );
}

export default Nav;
