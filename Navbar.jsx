import React, { useState } from "react";


import "./Navbar.css";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar bg-nav ">

      <div className="logo">
        <span className="Indra">INDRA</span><span className="Dev">Dev</span>
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li  className="pl-5"><a href="#home">Home</a></li>
        <li  className="pl-5"><a href="#about">About Me</a></li>
        <li  className="pl-5"><a href="#services">Skills</a></li>
        <li  className="pl-5"><a href="#projects">Projects</a></li>
        <li  className="pl-5"><a href="#contact">Contact Us</a></li> 
      </ul>

      <div
        className="menu-icon "
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="material-symbols-outlined">menu</span>
      </div>

    </nav>
  );
};

export default Navbar;