import React from 'react';
import { Typography } from '@mui/material';
import { styled, keyframes } from '@mui/system';

// Define the keyframes for horizontal scrolling from right to left
const scrollAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

// Define the keyframes for the wave animation
const waveAnimation = keyframes`
  0%, 60%, 100% {
    transform: initial;
  }
  30% {
    transform: translateY(-15px);
  }
`;

// SVG pattern for the refined zigzag border
const zigzagPath = 'polygon(0% 12%, 5% 0%, 10% 12%, 15% 0%, 20% 12%, 25% 0%, 30% 12%, 35% 0%, 40% 12%, 45% 0%, 50% 12%, 55% 0%, 60% 12%, 65% 0%, 70% 12%, 75% 0%, 80% 12%, 85% 0%, 90% 12%, 95% 0%, 100% 12%, 100% 100%, 95% 88%, 90% 100%, 85% 88%, 80% 100%, 75% 88%, 70% 100%, 65% 88%, 60% 100%, 55% 88%, 50% 100%, 45% 88%, 40% 100%, 35% 88%, 30% 100%, 25% 88%, 20% 100%, 15% 88%, 10% 100%, 5% 88%, 0% 100%)';

// Style the container to handle the scrolling and zigzag border
const ScrollContainer = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  width: '100%',
  backgroundColor: 'skyblue',
  backgroundSize: '100px 100px',
  boxSizing: 'border-box',
  position: 'relative',
  clipPath: zigzagPath,
  padding: '8px',
  marginBottom: '13px'
}));

// Style the scrolling text with wave animation
const ScrollingText = styled('div')(({ theme }) => ({
  display: 'inline-block',
  whiteSpace: 'nowrap',
  animation: `${scrollAnimation} 30s linear infinite`, // Increased duration for slower speed
}));

// Style individual characters with wave animation
const WaveText = styled('span')(({ theme }) => ({
  display: 'inline-block',
  animation: `${waveAnimation} 2.5s infinite ease-in-out`,
}));

// Main AnimationText component
const AnimationText = () => {
  const text = "Hello, Miss World! fyufyuyuf uguituir  yuryuryukryu  ryurkyu ryu ryury! ";

  return (
    <ScrollContainer>
      <ScrollingText>
        <Typography variant="h4" component="div" align="center">
          {text.split('').map((char, index) => (
            <WaveText
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {char}
            </WaveText>
          ))}
        </Typography>
      </ScrollingText>
    </ScrollContainer>
  );
};

export default AnimationText;
