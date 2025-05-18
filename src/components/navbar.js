import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";
import logo from "../assets/images/circular.png";
import "../assets/styles/navbar.css";

function CustomNavbar() {
  return (
    <>
    <div className="top-header">
  <div className="container">
    <div className="row align-items-center justify-content-between">
      <div className="col-lg-6 d-none d-lg-block">
        <ul className="contact-info list-inline mb-0">
          <li className="list-inline-item me-4">
            <i className="far fa-envelope me-1"></i>
            <a href="mailto:contact@kalpabriksha.org">contact@kalpabriksha.org</a>
            <span className="mx-2">|</span>
          </li>
          <li className="list-inline-item">
            <i className="fas fa-phone-volume me-1"></i>
            <a href="tel:+9779763684743">+977 9763684743</a>
          </li>
        </ul>
      </div>
      <div className="col-lg-3 col-md-6 text-lg-end">
        <ul className="social-links list-inline mb-0">
          <li className="list-inline-item">
            <small className="text-muted">Follow Us:</small>
          </li>
          <li className="list-inline-item">
            <a href="https://www.facebook.com/kalpabriksha.np" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.instagram.com/kalpabriksha.np/" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>


      <Navbar expand="lg" bg="white" variant="light" className="py-3">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" width="80" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mx-auto">
            <NavDropdown title="About" id="about-dropdown">
              <NavDropdown.Item as={NavLink} to="/about">About Us</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/bod">Our Team</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Our Programs"  id="programs-dropdown">
              <NavDropdown.Item as={NavLink} to="/cbwc">Change Because We Can</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/">Other Programs</NavDropdown.Item>
            </NavDropdown>

            <NavLink to="/gallery" className="custom-nav-link">Gallery</NavLink>
            <NavLink to="/contact" className="custom-nav-link">Contact Us</NavLink>
            <NavLink to="/resources" className="custom-nav-link">Resources</NavLink>
            <NavLink to="/faqs" className="custom-nav-link">FAQs</NavLink>
          </Nav>

          <Button as={NavLink} to="/donate" className="donate-button">DONATE</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default CustomNavbar;