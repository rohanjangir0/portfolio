import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">Rohan.exe</div>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={isOpen ? "line line1 active" : "line line1"}></div>
        <div className={isOpen ? "line line2 active" : "line line2"}></div>
        <div className={isOpen ? "line line3 active" : "line line3"}></div>
      </div>

      {/* Navigation Links */}
      <div className={`nav-cont ${isOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
