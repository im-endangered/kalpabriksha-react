import React from 'react';
import logo from '../assets/images/circular.png'; // Adjust the path based on your file location

function Navbar() {
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
                <li><small>Follow Us</small>:</li>
                <li><a href="https://www.facebook.com/kalpabriksha.np" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a></li>
                <li><a href="https://www.instagram.com/kalpabriksha.np/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
              </ul>
            </div>
            <div className="col-lg-3 d-none d-md-block col-md-6 btn-bhed kalpa-text">
              <b><span style={{ color: '#CC0000' }}>Kalpa</span><span style={{ color: '#38761D' }}>वृक्ष</span>: <span style={{ color: '#3D85C6' }}>Where dreams blossom!</span></b>
            </div>
          </div>
        </div>
      </div>
      <div id="menu-jk" className="header-bottom">
        <div className="container">
          <div className="row nav-row">
            <div className="col-lg-2 col-md-12 logo">
              <a href="/">
                <img src={logo} alt="logo" width="75" height="75" />
              </a>
            </div>
            <div id="menu" className="col-lg-10 col-md-12 d-none d-lg-block nav-col">
              <ul className="navbad">
                <li className="nav-item active"><a className="nav-link highlighted" href="/">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="/about_us">About</a></li>
                <li className="nav-item"><a className="nav-link" href="/change">Change: Because We Can</a></li>
                <li className="nav-item"><a className="nav-link" href="/gallery">Gallery</a></li>
                <li className="nav-item"><a className="nav-link" href="/contact_us">Contact Us</a></li>
                <li className="nav-item"><a className="nav-link" href="/donate_us">Donate Us</a></li>
                <li className="nav-item"><a className="nav-link" href="/faq">FAQs</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
