import React from 'react';
import { Container, Paper, Typography, Button, Grid } from '@mui/material';
import { Line, Bar } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import Header from "./Header";
import Footer from './Footer';


const Metrics = ({ averageLengths, dailyMessages, numChats, averageLengthData, dailyMessagesData, options, barOptions }) => {
  return (
    <>
      <Header />
      <Container>
        <Typography variant="h4" gutterBottom style={{ marginTop: '30px' }}>
          Chat Metrics
        </Typography>
        <Button variant="outlined" component={Link} to="/app" style={{ marginBottom: '16px' }}>
          Chat
        </Button>
        <Button
          variant="outlined"
          title="Back to home page"
          component={Link}
          to="/"
          style={{ marginBottom: '16px', marginLeft: '16px', alignItems: 'center' }}
        >
          <HomeIcon />
        </Button>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper style={{ padding: '16px', border: '2px solid black', marginBottom: '120px', height: '80%' }}>
              <Typography variant="h6" gutterBottom style={{fontWeight: 'bold'}}>
                Average Message Length
              </Typography>
              <Line data={averageLengthData} options={options} />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper style={{ padding: '16px', border: '2px solid black', height: '80%' }}>
              <Typography variant="h6" gutterBottom style={{fontWeight: 'bold'}}>
                Messages per Day
              </Typography>
              <Bar data={dailyMessagesData} options={barOptions} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Metrics;