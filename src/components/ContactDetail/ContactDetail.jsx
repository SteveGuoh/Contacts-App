import React from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import DetailItem from "./components/DetailItem";
import { Typography, Box, Paper, Grid, Link, Button } from "@mui/material";
import {
  Email as EmailIcon,
  Person as PersonIcon,
  Phone as PhoneIcon,
  Web as WebIcon,
  Business as BusinessIcon,
  Home as HomeIcon,
  LocationOn as LocationOnIcon,
} from "@mui/icons-material";

const ContactDetail = ({ contacts }) => {
  const { id } = useParams();
  const contact = contacts.find((contact) => contact.id === parseInt(id));

  if (!contact) return <Box>Contact not found</Box>;

  const details = [
    {
      icon: <PersonIcon sx={{ color: "#0073b1" }} />,
      label: "Username",
      value: contact.username,
    },
    {
      icon: <EmailIcon sx={{ color: "#0073b1" }} />,
      label: "Email",
      value: (
        <Link
          href={`mailto:${contact.email}`}
          sx={{
            textDecoration: "none",
            color: "#0073b1",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          {contact.email}
        </Link>
      ),
    },
    {
      icon: <PhoneIcon sx={{ color: "#0073b1" }} />,
      label: "Phone",
      value: contact.phone,
    },
    {
      icon: <WebIcon sx={{ color: "#0073b1" }} />,
      label: "Website",
      value: contact.website,
    },
    {
      icon: <HomeIcon sx={{ color: "#0073b1" }} />,
      label: "Address",
      value: `${contact.address.street}, ${contact.address.suite}, ${contact.address.city}, ${contact.address.zipcode}`,
    },
    {
      icon: <LocationOnIcon sx={{ color: "#0073b1" }} />,
      label: "Geo",
      value: `Lat: ${contact.address.geo.lat}, Lng: ${contact.address.geo.lng}`,
    },
    {
      icon: <BusinessIcon sx={{ color: "#0073b1" }} />,
      label: "Company",
      value: contact.company.name,
    },
    {
      icon: <BusinessIcon sx={{ color: "#0073b1" }} />,
      label: "Business Strategy",
      value: contact.company.bs,
    },
    {
      icon: <BusinessIcon sx={{ color: "#0073b1" }} />,
      label: "Company Catchphrase",
      value: contact.company.catchPhrase,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 4,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          marginBottom: 3,
          color: "#0073b1",
          fontWeight: "bold",
          textAlign: "center",
          width: "100%",
        }}
      >
        {contact.name}
      </Typography>

      <Paper
        sx={{
          padding: 3,
          borderRadius: 2,
          maxWidth: "80%",
          width: "100%",
          mb: 3,
        }}
      >
        <Grid container spacing={3}>
          {details.map((item, index) => (
            <DetailItem key={index} {...item} />
          ))}
        </Grid>
      </Paper>

      <Button
        component={RouterLink}
        to="/"
        variant="outlined"
        sx={{
          mt: 3,
          borderColor: "#0073b1",
          color: "#0073b1",
          padding: "0.5rem 1.5rem",
        }}
      >
        Back to Contacts
      </Button>
    </Box>
  );
};

export default ContactDetail;
