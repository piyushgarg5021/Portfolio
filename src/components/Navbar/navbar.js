// Navbar.js
import React from 'react';
import { Link } from 'react-scroll';
import contactImg from '../../assets/contact.png';
import logo from '../../assets/logo.png';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className='logo' />
      <div className="desktopMenu">
        <Link to="intro" smooth={true} className="desktopMenuListItem">Home</Link>
        <Link to="education" smooth={true} className="desktopMenuListItem">Education</Link>
        <Link to="skills" smooth={true} className="desktopMenuListItem">Skills</Link>
        <Link to="projects" smooth={true} className="desktopMenuListItem">Projects</Link>
        
      </div>
      <Link to="contact" smooth={true} className="desktopMenuBtn"> {/* Updated to use Link */}
        <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me
      </Link>
    </nav>
  );
}

export default Navbar;
