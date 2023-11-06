import React from "react";
import { Typography, Container, Box } from "@mui/material";

const NotFound = () => {
  return (
    <Container
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f5f5f5'
      }}
    >
      <Box sx={{ mb: 4 }}>
        <Typography 
          variant="h2" 
          sx={{ color: '#0073b1', fontWeight: 'bold' }} 
        >
          404
        </Typography>
      </Box>
      <Typography 
        variant="h4"
        sx={{ mb: 2, color: '#424242' }}
      >
        Not Found
      </Typography>
      <Typography 
        variant="subtitle1"
        sx={{ color: '#616161' }}
      >
        The page you are looking for does not exist.
      </Typography>
    </Container>
  );
};

export default NotFound;