import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Crousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hide next/prev buttons
    responsive: [
      {
        breakpoint: 1024, // Adjust for larger screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true
        }
      },
      {
        breakpoint: 768, // Tablet screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 480, // Mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };

  return (
    <Box
      sx={{
        width: '90%',
        display: 'block',
        m: 'auto',
        '& .slick-slide img': {
          width: '100%',
          height: { xs: '650px', md: '650px' }, // Responsive height
          objectFit: 'cover'
        }
      }}
    >
      <Slider {...settings}>
        <div>
          <img src="../src/assets/firstCrouselImg.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="../src/assets/secondCrouselImg.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="../src/assets/thridCrouselImg.jpg" alt="Slide 3" />
        </div>
        <div>
          <img src="../src/assets/fourthCrouselImg.jpg" alt="Slide 4" />
        </div>
      </Slider>
    </Box>
  );
};

export default Crousel;
