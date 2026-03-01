import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Topheader from './components/Topheader';
import Header from './components/Header';
import Home from './components/Home/Home';
import About from './components/About';
import Classes from './components/Classes';
import Teachers from './components/Teachers';
import Gallery from './components/Gallery';
import Event from './components/Event';
import Partnear from './components/Partnear';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <BrowserRouter>
      <Topheader />
      <Header />
      <Routes>
        // Home page route
                <Route path="/" element={<Home />} />
        // About page route
                <Route path="/about" element={<About />} />
        // Classes page route
                <Route path="/classes" element={<Classes />} />
        // Teachers page route
                <Route path="/teachers" element={<Teachers/>} />
        // Gallery page route
                <Route path="/gallery" element={<Gallery />} />
        // Event page route
                <Route path="/event" element={<Event />} />
        // Blog/Partnear page route
                <Route path="/blog" element={<Partnear/>} />
        // Shop page route
                <Route path="/shop" element={<Testimonial/>} />
        // Contact page route
                <Route path="/contact" element={<Footer/>} />
        // Fallback route for undefined paths
                <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
