import React from 'react';
import { Container, Paper, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = ({ chatHistory }) => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom style={{ marginTop: '30px' }}>
        Recent Chat History
      </Typography>
      <Paper style={{ padding: '16px', border: '2px solid black', height: '600px', overflowY: 'auto' }}>
        <List>
          {chatHistory.map((chat, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`Chat ${index + 1}`}
                secondary={chat.length > 0 ? chat[0].message : 'No messages'}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
      <Button variant="contained" component={Link} to="/app" style={{ marginTop: '16px' }}>
        Start Another Chat
      </Button>
      <Button variant="contained" component={Link} to="/metrics" style={{ marginTop: '16px' , marginLeft: '16px'}}>
        View Metrics
        </Button>
    </Container>
  );
};

export default HomePage;