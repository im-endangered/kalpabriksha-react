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
    <header className="container-fluid">
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
                  <a href="tel:+9779843389412">+977 9843389412</a>
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
      <div id="menu-jk" className="header-bottom">
        <div className="container">
          <div className="row nav-row">
            <div className="col-lg-2 col-md-12 logo">
              <Link to="/">
                <img src={logo} alt="logo" width="75" height="75" />
              </Link>
              <button
                className={`small-menu d-lg-none ${
                  isMenuOpen || location.pathname === "/" ? "bg-blue" : ""
                }`}
                onClick={toggleMenu}
              >
                &#9776;
              </button>
            </div>
            <div
              id="menu"
              className={`col-lg-12 col-md-9 nav-col ${isMenuOpen ? "d-block" : "d-none d-lg-block"}`}
            >
              <ul className="navbad">
                <li>
                  <NavLink to="/" className={({isActive})=>`nav-link ${isActive ? "highlighted" : ""}`} exact>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className={({isActive})=>`nav-link ${isActive ? "highlighted" : "nav-link"}`}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/cbwc" className={({isActive})=>`nav-link ${isActive ? "highlighted" : "nav-link"}`}>
                    Change: Because We Can
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/gallery" className={({isActive})=>`nav-link ${isActive ? "highlighted" : "nav-link"}`}>
                    Gallery
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className={({isActive})=>`nav-link ${isActive ? "highlighted" : "nav-link"}`}>
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/donate" className={({isActive})=>`nav-link ${isActive ? "highlighted" : "nav-link"}`}>
                    Donate Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/faq" className={({isActive})=>`nav-link ${isActive ? "highlighted" : "nav-link"}`}>
                    FAQs
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/download" className={({isActive})=>`nav-link ${isActive ? "highlighted" : "nav-link"}`}>
                    Downloads
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
