import React from "react";
import "../style/navbar.css";
import logo from "../asset/arounmanufacturing.png";
function Header() {
  return (
    <header className="header">
      <div className="header-container">

        <img
          src={logo}
          alt="Aroun Industries"
          className="logo"
        />

        <nav className="nav-links">
          <a className="active" href="#home">Home</a>
          <a href="/machines">Machines</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="contact-box">
          <div className="sales">
            <span>Sales Inquiry</span>
            <a href="mailto:arounindustries@gmail.com">
              arounindustries@gmail.com
            </a>
          </div>

          <a href="tel:8438434000" className="phone-btn">
            843 843 4000
          </a>
        </div>

      </div>
    </header>
  );
}

export default Header;
