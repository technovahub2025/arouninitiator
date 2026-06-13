import React, { useState } from "react";
import { Phone, Mail, MapPin, FilePenLine, ChevronDown, Menu, X } from "lucide-react";
import "../style/navbar.css";
import logo from "../asset/arounlogo.jpeg";

const Header = ({ onQualityClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };



  return (
    <header className="header">
      <div className="top-bar">
        <div className="top-item">
          <Phone size={14} />
          <span>843 843 4000 / 2000 / 5000</span>
        </div>
        <div className="top-item">
          <Mail size={14} />
          <span>arounindustries@gmail.com</span>
        </div>
        <div className="top-item top-item-address">
          <MapPin size={14} />
          <span>14, 15, Sri Krishna Nagar, Pothurai, Vanur Taluk, Villupuram District, Tamil Nadu 605 111</span>
        </div>
      </div>

      <div className="nav-bar">
        
           <img
            src={logo}
            alt="Aroun Manufacturing Industries"
            width="520"
            height="150"
          />
      

        <button
          type="button"
          className="nav-menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className={`nav-actions ${menuOpen ? "open" : ""}`}>
          <nav className="nav-links">
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
            <a href="#products" className="products-link" onClick={() => setMenuOpen(false)}>
              Products <ChevronDown size={14} />
            </a>
            <a href="#manufacturing" onClick={() => setMenuOpen(false)}>Manufacturing</a>
            <button
              type="button"
              onClick={() => {
                onQualityClick?.();
                setMenuOpen(false);
              }}
            >
              Quality
            </button>
            <a href="#bulk" onClick={() => setMenuOpen(false)}>Bulk Orders</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact Us</a>
          </nav>

          <button className="quote-btn" type="button" onClick={() => scrollToSection("bulk")}>
            <FilePenLine size={17} />
            Get a Quote
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
