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
      <div className="header-top">
        <div className="container">
          <div className="row col-det">
            <div className="col-lg-6 d-none d-lg-block">
              <ul className="ulleft">
                <li>
                  <i className="far fa-envelope"></i>
                  <a href="mailto:contact@kalpabriksha.org">contact@kalpabriksha.org</a>
                  <span>|</span>
                </li>
                <li>
                  <i className="fas fa-phone-volume"></i>
                  <a href="tel:+9779763684743">+977 9763684743</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 folouws">
              <ul className="ulright">
                <li>
                  <small>Follow Us</small>:
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/kalpabriksha.np"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/kalpabriksha.np/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
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
