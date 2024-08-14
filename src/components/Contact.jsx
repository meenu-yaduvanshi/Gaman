import React from "react";
// import Nav from './components/Nav';
import '../style/contact.css'
import { Container, TextField, Button, Grid, Typography, Box } from '@mui/material';


const Contact =()=>{
  return (
    <>
    <img src="data:image/jpeg;base64,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" alt="" />
    
    <div className="form-div">
      <form>
      <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" align="center" gutterBottom>
          Contact Us
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Mobile Number"
                variant="outlined"
                required
                type="tel"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email ID"
                variant="outlined"
                required
                type="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Any Question"
                variant="outlined"
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>

      </form>
    {/* <h2>8795988677</h2>
    <h2>neharaao2022@gmail.com</h2>
    <h2>Mumbai</h2> */}
    </div>

    </>
  )
}

export default Contact;