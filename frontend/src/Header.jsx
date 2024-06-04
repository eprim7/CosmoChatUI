import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import imageSrc from "./Logo.png"
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor: '#fda085'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            
          >
            <img src={imageSrc} alt="Logo" style={{ height: '60px', width: '80px' }} />

          </IconButton>
          <Button variant='text' component={Link} to="/" color='inherit'>
            Chat GPT Clone
          </Button>
          <Button variant='text' component={Link} to="/Metrics" color="inherit" style={{marginLeft:'100px'}}>
            Metrics
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}