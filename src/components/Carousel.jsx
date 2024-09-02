import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import '../style/carousel.css';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath: '../src/assets/firstCarouselImg.jpg',
    label: 'Chettinad Home, Kandukathan',
  },
  {
    imgPath: '../src/assets/secondCarouselImg.jpg',
    label: 'Virupaksha Temple, Hampi',
  },
  {
    imgPath: '../src/assets/thridCarouselImg.jpg',
    label: 'Sharavati Backwaters, Honnavara',
  },
  {
    imgPath: '../src/assets/fourthCarouselImg.jpg',
    label: 'Cochin Cultural Centre',
  },
];

function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: '100%',
        flexGrow: 1,
        margin: 'auto',
        '@media (max-width: 760px)': {
          maxWidth: '100%',
        },
      }}
    >
      <AutoPlaySwipeableViews
        interval={7000} // Slows down the autoplay speed to 5 seconds
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <Box
            key={step.label}
            sx={{
              position: 'relative',
            }}
          >
            {Math.abs(activeStep - index) <= 2 ? (
              <>
                <Box
                  component="img"
                  sx={{
                    height: 900,
                    display: 'block',
                    overflow: 'hidden',
                    width: '100%',
                    marginTop: '30px',
                    '@media (max-width: 760px)': {
                      height: 240,
                    },
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
                <div className='image-text'>
                  <Typography
                    variant="body2"
                    sx={{
                      position: 'absolute',
                      bottom: '38px',
                      right: '45px',
                      backgroundColor: 'rgb(245, 245, 245)',
                      color: '#28397D',
                      padding: '5px 10px',
                      borderRadius: '5px',
                      fontSize: '20px',
                      '@media (max-width: 760px)': {
                        fontSize: '0.75rem',
                        bottom: '10px',
                        right: '10px',
                        padding: '2px 5px',
                        textAlign: 'center',
                      },
                    }}
                  >
                    {step.label}
                  </Typography>
                </div>
              </>
            ) : null}
          </Box>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

export default Carousel;
