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

function App() {
  return (
    <Router>
      <Routes>
        {/* Set Home as the default route */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
