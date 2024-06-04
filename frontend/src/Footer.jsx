import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



export default function Footer(){
    return (
        <Box sx={{ backgroundColor: '#fda085', height: '100px', bottom: '0', left: '0', width: '100%'}}>
            <Typography color="white" textAlign="center" margin='20px' variant='h5'>
                Created Using Node.js and React.js
            </Typography>
            <Typography color="white" textAlign="center" marginTop='20px' variant='h5'>
                If you have any questions feel free to email evan.primasing7@gmail.com
            </Typography>
        </Box>
    );
    
}
