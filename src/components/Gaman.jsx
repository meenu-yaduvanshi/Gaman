// src/components/Gaman.jsx
import React from 'react';
import Crousel from "./Crousel";
import '.././App.css'
import AnimationText from './AnimationText';

const Gaman = () => {
  
  return (
    <div>
      <Crousel />
        <div className='heading'>
          A line About Gaman
        </div>
        <AnimationText />
        {/* <TripPlanForm /> */}
    </div>
  );
};

export default Gaman;
