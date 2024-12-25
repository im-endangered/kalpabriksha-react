
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/images/circular.png';
import '../assets/styles/navbar.css'; // Ensure styles for the updated navbar are added

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="container-fluid">
      <div className="header-top">
        {/* Top Bar */}
        {/* Add your existing header-top content */}
      </div>
      <div className="header-bottom">
        <div className="container">
          <div className="row nav-row">
            <div className="col-lg-2 col-md-12 logo">
              <a href="/">
                <img src={logo} alt="logo" width="75" height="75" />
              </a>
            </div>
            <div id="menu" className="nav-col d-none d-lg-block">
              <ul className="navbad">
                {/* Add your existing menu links */}
              </ul>
            </div>
            <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
              <i className="fas fa-bars"></i>
            </div>
          </div>
          {/* Mobile Menu */}
          <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <ul>
              <li>
                <a href="/" className={location.pathname === '/' ? 'highlighted' : ''}>
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className={location.pathname === '/about' ? 'highlighted' : ''}>
                  About
                </a>
              </li>
              <li>
                <a href="/cbwc" className={location.pathname === '/cbwc' ? 'highlighted' : ''}>
                  Change: Because We Can
                </a>
              </li>
              <li>
                <a href="/gallery" className={location.pathname === '/gallery' ? 'highlighted' : ''}>
                  Gallery
                </a>
              </li>
              <li>
                <a href="/contact" className={location.pathname === '/contact' ? 'highlighted' : ''}>
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/donate" className={location.pathname === '/donate' ? 'highlighted' : ''}>
                  Donate Us
                </a>
              </li>
              <li>
                <a href="/faq" className={location.pathname === '/faq' ? 'highlighted' : ''}>
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

