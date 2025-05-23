// src/App.js
import './assets/styles/bootstrap.min.css'; // Bootstrap CSS
import './assets/styles/animate.css'; // Animations
import './assets/styles/personalized.css'; // Custom personalized styles
import './assets/styles/style.css'; // Main style
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home'; // Ensure this matches your `Home.js` file path
import BOD from './pages/bod';
import About from './pages/about';
import Change from './pages/change';
import ContactUs from './pages/contact';
import DonateUs from './pages/donate';
import FAQ from './pages/faq';
import Gallery from './pages/gallery';
import Downloads from './pages/Downloads.js';
import BecomeMember from './pages/becomeMember.js';

function App() {
    return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bod" element={<BOD />} />
        <Route path="/about" element={<About />} />
        <Route path="/cbwc" element={<Change />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/donate" element={<DonateUs />} />
        <Route path="/faqs" element={<FAQ />} />
        <Route path="/resources" element={<Downloads />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/membership" element={<BecomeMember />} />
      </Routes>
    </Router>
  );
}
export default App;
