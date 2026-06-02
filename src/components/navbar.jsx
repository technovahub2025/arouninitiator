import React, { useState } from "react";
import "../style/navbar.css";
import logo from "../asset/arounlogo.jpeg";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-container">

        <img
          src={logo}
          alt="Aroun Industries"
          className="logo"
        />

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="primary-navigation"
          className={`nav-links ${menuOpen ? "open" : ""}`}
        >
          <a className="active" href="#home" onClick={closeMenu}>Home</a>
          <div className="nav-dropdown">
            <a href="#products" onClick={closeMenu}>Machines</a>
            
          </div>
          <a href="#gallery" onClick={closeMenu}>Gallery</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <div className={`contact-box ${menuOpen ? "open" : ""}`}>
          <div className="sales">
            <span>Sales Inquiry</span>
            <a href="mailto:arounindustries@gmail.com">
              arounindustries@gmail.com
            </a>
          </div>

          <a href="tel:8438434000" className="phone-btn">
            843 843 4000 / 2000 / 5000
          </a>
        </div>

      </div>
    </header>
  );
}

export default Header;
