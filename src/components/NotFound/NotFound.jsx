import React from "react";
import { Typography, Container } from "@mui/material";

const NotFound = () => {
  return (
    <Container>
      <Typography variant="h1">404 - Not Found</Typography>
      <Typography>The page you are looking for does not exist.</Typography>
    </Container>
  );
};

export default NotFound;
