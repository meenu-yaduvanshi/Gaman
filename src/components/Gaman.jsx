// src/components/Gaman.jsx
import React from 'react';
import Carousel from "./Carousel";
import '.././App.css'
import AnimationText from './AnimationText';
import ReviewSlideshow from './ReviewSlideshow'

const Gaman = () => {
  return (
    <div>
      <Carousel />

      <div className='a-line-about-gaman'>
        <h3>About</h3>
        <p>Gaman designs beautifully curated experiences seamlessly for the
          voyager in you. We recognize the pursuit of wonder beyond just ticking off items of
          the list.</p>

        <p className='p2'> To promote responsible tourism, advocate local
        cultures and community practices, we tailor itineraries
        from first-hand experience. Determined to take the road
        less travelled, Gaman hopes to personalize and create memories of a lifetime!
        <br /></p>
        <p className='sp'> We'd love to map out your next journey :)</p>
    </div>

      {/* <div className='main-div'>
        <div className='heading'>
          A line About Gaman
        </div>
        </div>
        <AnimationText />
        <div className='trip-plan-form-box'>
        <img src="/src/assets/trip-plan-form.jpg" alt="" />
      </div> */}
  {/* <ReviewSlideshow slides={slides} /> */ }
  {/* <SlideShow /> */ }
    </div >
  );
};

export default Gaman;
