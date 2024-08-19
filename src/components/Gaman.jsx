// src/components/Gaman.jsx
import React from 'react';
import Crousel from "./Crousel";
import '.././App.css'
import AnimationText from './AnimationText';
import ReviewSlideshow from './ReviewSlideshow'

const Gaman = () => {

  const slides = [
    {
      image: 'https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=600',
      heading: 'Heading 1',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elitMaxime, iste nostrum atque laudantium voluptatem, eligendi quia voluptatibus corporis excepturi et laborum numquam'
    },
    {
      image: 'https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=600',
      heading: 'Heading 2',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, iste nostrum atque laudantium voluptatem, eligendi  quia voluptatibus corporis excepturi et laborum numquam'
    },
    {
      image: 'https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=600',
      heading: 'Heading 3',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, iste nostrum atque laudantium voluptatem, eligendi  quia voluptatibus corporis excepturi et laborum numquam'
    }
  ];
  return (
    <div>
      <Crousel />
      
        <div className='a-line-about-gaman'>
          <h3>About</h3>
          <p>Gaman designs beautifully curated experiences seamlessly for the 
             voyager in you. We recognize the pursuit of wonder beyond just ticking off items of
            the list. <br /><br />
            To promote responsible tourism, advocate local
            cultures and community practices, we tailor itineraries
            from first-hand experience. Determined to take the road
            less travelled, Gaman hopes to personalize and create memories of a lifetime!
            <br /> <br />
            <span> We'd love to map out your next journey :)</span></p>
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
      <ReviewSlideshow slides={slides} />
      {/* <SlideShow /> */}
    </div>
  );
};

export default Gaman;
