import React from 'react';
import { Container, Paper, Typography, Button } from '@mui/material';
import { Line, Bar } from 'react-chartjs-2';
import { Link } from 'react-router-dom';

const Metrics = ({ averageLengths, dailyMessages, numChats, averageLengthData, dailyMessagesData, options, barOptions }) => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom style={{ marginTop: '30px' }}>
        Chat Metrics
      </Typography>
      <Button variant="contained" component={Link} to="/app" style={{ marginBottom: '16px' }}>
        Back to Chat
      </Button>
      <Button variant="contained" title='Back to home page'component={Link} to="/" style={{ marginBottom: '16px', marginLeft: '16px'}}>
         Home
      </Button>
      <Paper style={{ padding: '16px', border: '2px solid black', marginBottom: '16px' }}>
        <Typography variant="h6" gutterBottom>
          Average Message Length
        </Typography>
        <Line data={averageLengthData} options={options} />
        <Typography variant="h6" gutterBottom style={{ marginTop: '16px' }}>
          Number of Chats: {numChats}
        </Typography>
      </Paper>
      <Paper style={{ padding: '16px', border: '2px solid black' }}>
        <Typography variant="h6" gutterBottom>
          Messages per Day
        </Typography>
        <Bar data={dailyMessagesData} options={barOptions} />
      </Paper>
    </Container>
  );
};

export default Metrics;
