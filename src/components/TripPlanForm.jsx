import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, useMediaQuery, useTheme } from '@mui/material';

const TripPlanForm = () => {
  const handleImageClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSddqpOvXPSYKifkWOObFp79MZ5Bm9JSuy6GqSADW8pNL90Qgg/viewform?vc=0&c=0&w=1&flr=0');
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card sx={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', maxWidth: 600, margin: '0 auto' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 2 }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Trip Plan Title
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Details about the trip plan go here. You can include any relevant information that you want to share.
          </Typography>
          <CardMedia
            component="img"
            sx={{ width: '100%', height: 50, cursor: 'pointer', marginTop: '16px' }}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwkJjQjQkUgTyM2qLxG3OT_HKbTaMeNXybKOLXCyWk1Ed2hDg-ng0N9KZIIgL3PdPEick&usqp=CAU"
            alt="Arrow Image"
            onClick={handleImageClick}
          />
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: isSmallScreen ? '100%' : 200 }}
        image="https://ik.imagekit.io/storybird/images/d68675ec-fff3-4902-92ae-b60ea6c0e6bc/0_86848533.png"
        alt="Card Image"
      />
    </Card>
  );
}

export default TripPlanForm;
