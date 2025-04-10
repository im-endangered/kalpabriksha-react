import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <h2>About Us</h2>
            <p>Kalpabriksha is a development platform that aims to provide growth and support to youth in Nepalese societies through various traditional as well as experimental initiatives.</p>
          </div>
          <div className="col-md-4 col-sm-12">
            <h2>Useful Links</h2>
            <ul className="list-unstyled link-list">
              <li><a href="/about">About Us</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-12">
            <h2>Contact Us</h2>
            <address>
              Kalpabriksha Nepal <br />
              Regd no: 6002 <br />
              Chapagaun, Lalitpur <br />
              Nepal <br />
              Phone: <a href="tel:+9779843389412">+977 9843389412</a> <br />
              Email: <a href="mailto:contact@kalpabriksha.org">contact@kalpabriksha.org</a> <br />
              Web: <a href="http://www.kalpabriksha.org">www.kalpabriksha.org</a> <br />
              &copy; 2024 Kalpabriksha | All rights reserved.
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
