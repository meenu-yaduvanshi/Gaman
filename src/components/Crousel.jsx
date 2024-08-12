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
        width: '100%',
        mt: 2,
        '& .slick-slide img': {
          width: '100%',
          height: { xs: '200px', md: '400px' }, // Responsive height
          objectFit: 'cover'
        }
      }}
    >
      <Slider {...settings}>
        <div>
          <img src="https://media.istockphoto.com/id/904172104/photo/weve-made-it-all-this-way-i-am-proud.jpg?s=612x612&w=0&k=20&c=MewnsAhbeGRcMBN9_ZKhThmqPK6c8nCT8XYk5ZM_hdg=" alt="Slide 1" />
        </div>
        <div>
          <img src="https://t4.ftcdn.net/jpg/00/65/48/25/360_F_65482539_C0ZozE5gUjCafz7Xq98WB4dW6LAhqKfs.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="https://media.istockphoto.com/id/904172104/photo/weve-made-it-all-this-way-i-am-proud.jpg?s=612x612&w=0&k=20&c=MewnsAhbeGRcMBN9_ZKhThmqPK6c8nCT8XYk5ZM_hdg=" alt="Slide 3" />
        </div>
        <div>
          <img src="https://t4.ftcdn.net/jpg/00/65/48/25/360_F_65482539_C0ZozE5gUjCafz7Xq98WB4dW6LAhqKfs.jpg" alt="Slide 4" />
        </div>
      </Slider>
    </Box>
  );
};

export default Crousel;
