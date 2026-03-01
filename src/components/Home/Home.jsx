import React from 'react';
import Homebanner from './Homebanner';
import './home.css';
import Facility from '../Facility';
import About from '../About';
import Card from '../Classes';
import Teachers from '../Teachers';
import Gallery from '../Gallery';
import Rateing from '../Rateing';
import Partnear from '../Partnear';
import Testimonial from '../Testimonial';
import Email from '../Email';
import Event from '../Event';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <Homebanner />
      <Facility />
      <About />
      <Card />
      <Teachers />
      <Gallery />
      <Rateing />
      <Testimonial/>
      <Partnear/>
      <Event/>
      <Email/>
      <Footer />
    </>
  );
}

export default Home;
