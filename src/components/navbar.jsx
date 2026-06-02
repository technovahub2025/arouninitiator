import React, { useState } from "react";
import "../style/navbar.css";
import logo from "../asset/arounlogo.jpeg";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(() => {
    if (typeof window === "undefined") return "home";

    if (window.location.pathname.includes("machines")) {
      return "machines";
    }

    const hash = window.location.hash.replace("#", "");
    return hash === "products" ? "machines" : hash || "home";
  });

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (key) => {
    setActiveLink(key);
    closeMenu();
  };

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
          <a
            className={activeLink === "home" ? "active" : ""}
            href="#home"
            aria-current={activeLink === "home" ? "page" : undefined}
            onClick={() => handleNavClick("home")}
          >
            Home
          </a>
          <a
            className={activeLink === "machines" ? "active" : ""}
            href="#products"
            aria-current={activeLink === "machines" ? "page" : undefined}
            onClick={() => handleNavClick("machines")}
          >
            Machines
          </a>
          <a
            className={activeLink === "gallery" ? "active" : ""}
            href="#gallery"
            aria-current={activeLink === "gallery" ? "page" : undefined}
            onClick={() => handleNavClick("gallery")}
          >
            Gallery
          </a>
          <a
            className={activeLink === "contact" ? "active" : ""}
            href="#contact"
            aria-current={activeLink === "contact" ? "page" : undefined}
            onClick={() => handleNavClick("contact")}
          >
            Contact
          </a>
        </nav>

        <div className={`contact-box ${menuOpen ? "open" : ""}`}>
          <div className="sales">
            <span>Sales Inquiry</span>
            <a href="mailto:arounindustries@gmail.com">
              arounindustries@gmail.com
            </a>
          </div>

          <a href="tel:8438434000" className="phone-btn">
            843 843 4000 /2000 /5000
          </a>
        </div>

      </div>
    </header>
  );
}

export default Header;
