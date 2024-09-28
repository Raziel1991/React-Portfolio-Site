import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';
import './Navbar.css'; // Assuming you create a CSS file for styling.

const Navbar = () => {
  return (
    <nav className="navbar animate__animated animate__fadeInDown">
      <ul className="navbar-links">
        <li className="navbar-item animate__animated animate__fadeInLeft">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item animate__animated animate__fadeInLeft animate__delay-1s">
          <Link to="/about" className="navbar-link">About Me</Link>
        </li>
        <li className="navbar-item animate__animated animate__fadeInLeft animate__delay-2s">
          <Link to="/projects" className="navbar-link">Projects</Link>
        </li>
        <li className="navbar-item animate__animated animate__fadeInLeft animate__delay-3s">
          <Link to="/services" className="navbar-link">Services</Link>
        </li>
        <li className="navbar-item animate__animated animate__fadeInLeft animate__delay-4s">
          <Link to="/contact" className="navbar-link">Contact Me</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
