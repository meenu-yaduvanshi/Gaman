// src/components/Gaman.jsx
import React from 'react';
import Crousel from "./Crousel";
import '.././App.css'
import AnimationText from './AnimationText';
import ReviewSlideshow from './ReviewSlideshow'
// import SlideShow from './SlideShow';
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
      <div className='main-div'>
        <div className='heading'>
          A line About Gaman
        </div>
        </div>
        <AnimationText />
        <div className='trip-plan-form-box'>
        <img src="/src/assets/trip-plan-form.jpg" alt="" />
      </div>
      <ReviewSlideshow slides={slides}/>
      {/* <SlideShow /> */}
    </div>
  );
};

export default Gaman;
