import React, { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import logo from "../assets/images/circular.png";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar-container">
      {/* Top Bar */}
      <div className="navbar-top">
        <div className="container d-flex justify-content-between align-items-center flex-wrap">
          <div className="d-flex align-items-center contact-info">
            <i className="far fa-envelope me-1"></i>
            <a href="mailto:contact@kalpabriksha.org" className="me-3">contact@kalpabriksha.org</a>
            <i className="fas fa-phone-volume me-1"></i>
            <a href="tel:+9779763684743">+977 9763684743</a>
          </div>
          <div className="d-flex align-items-center social-links">
            <small className="me-2">Follow Us:</small>
            <a href="https://www.facebook.com/kalpabriksha.np" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook me-2"></i>
            </a>
            <a href="https://www.instagram.com/kalpabriksha.np/" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="navbar-main">
        <div className="container d-flex justify-content-between align-items-center flex-wrap">
          {/* Logo */}
          <div className="d-flex align-items-center">
            <Link to="/" className="navbar-logo me-3">
              <img src={logo} alt="Kalpabriksha Logo" height="55" />
            </Link>
            <button className="d-lg-none nav-toggle" onClick={toggleMenu}>
              &#9776;
            </button>
          </div>

          {/* Nav Links */}
          <nav className={`nav-links ${isMenuOpen ? "show" : ""}`}>
            <ul className="d-flex flex-wrap align-items-center justify-content-center">
              {[
                { path: "/", name: "Home" },
                { path: "/about", name: "About" },
                { path: "/cbwc", name: "Change: Because We Can" },
                { path: "/gallery", name: "Gallery" },
                { path: "/contact", name: "Contact Us" },
                { path: "/donate", name: "Donate Us" },
                { path: "/faq", name: "FAQs" },
                { path: "/download", name: "Downloads" },
              ].map((link) => (
                <li key={link.path} className="nav-item">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "highlighted" : ""}`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
