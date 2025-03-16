import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <h2>About Us</h2>
            <p>Kalpabriksha is a development platform that aims to provide growth and support to youth in Nepalese societies through various traditional as well as experimental initiatives.
            <br/><br/>Regd no: 6002 <br />
              PAN: 622048826 <br />
              SWC Affiliation No: 57817 <br />
            </p>
          </div>
          <div className="col-md-4 col-sm-12">
            <h2>Useful Links</h2>
            <ul className="list-unstyled link-list">
              <li><a href="/about_us">About Us</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/contact_us">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-12">
            <h2>Contact Us</h2>
            <address>
              Kalpabriksha Nepal <br />        
              Chapagaun, Lalitpur, Nepal <br />
              Phone: <a href="tel:+9779843389412">+977 9763684743</a> <br />
              Email: <a href="mailto:contact@kalpabriksha.org">contact@kalpabriksha.org</a> <br />
              Web: <a href="http://www.kalpabriksha.org">www.kalpabriksha.org</a> <br />
              &copy; 2025 Kalpabriksha | All rights reserved.
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
