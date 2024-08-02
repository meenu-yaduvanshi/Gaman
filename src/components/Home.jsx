import React from 'react';
import Nav from './Nav';
import Crousel from './Crousel'; // Ensure this matches the file name
import AnimationText from './AnimationText';
import Card from './Card';
import TripPlanForm from './TripPlanForm';
import Footer from './Footer';
import Slideshow from './Slideshow';

const Home = () => {
  return (
    <>
      <Nav />
      <Crousel />
      <div className="circel">
        <p>A line about Gaman</p>
      </div>
      <AnimationText />
      <TripPlanForm />
      <Card />
      <Slideshow />
      <Footer />
    </>
  );
}

export default Home;
