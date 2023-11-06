import React from "react";
import { useParams } from "react-router-dom";
import { Typography, Box, Paper, Grid, Icon, Link } from "@mui/material";
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

  const capitaliseEachWord = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 3,
      }}
    >
      <Typography
        variant="h4"
        sx={{ marginBottom: 2, color: "#0073b1", fontWeight: "bold", textAlign: "center", width: "100%" }}
      >
        {contact.name}
      </Typography>

      <Paper
        sx={{
          padding: 3,
          borderRadius: 2,
          maxWidth: "80%",
          width: "100%",
          mb: 2,
        }}
      >
        <Grid container spacing={3}>
          {[
            {
              icon: <PersonIcon />,
              label: "Username",
              value: contact.username,
            },
            {
              icon: <EmailIcon />,
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
            { icon: <PhoneIcon />, label: "Phone", value: contact.phone },
            { icon: <WebIcon />, label: "Website", value: contact.website },
            {
              icon: <BusinessIcon />,
              label: "Company",
              value: contact.company.name,
            },
            {
              icon: <BusinessIcon />,
              label: "Business Strategy",
              value: capitaliseEachWord(contact.company.bs),
            },
            {
              icon: <BusinessIcon />,
              label: "Company Catchphrase",
              value: contact.company.catchPhrase,
            },
            {
              icon: <HomeIcon />,
              label: "Address",
              value: `${contact.address.street}, ${contact.address.suite}, ${contact.address.city}, ${contact.address.zipcode}`,
            },
            {
              icon: <LocationOnIcon />,
              label: "Geo",
              value: `Lat: ${contact.address.geo.lat}, Lng: ${contact.address.geo.lng}`,
            },
          ].map((item, index) => (
            <Grid
              key={index}
              item
              xs={12}
              md={4}
              sx={{ background: "#fff", padding: "1rem", borderRadius: "8px" }}
            >
              <Icon>{item.icon}</Icon>
              <Typography
                sx={{ color: "#424242", fontSize: "1.1rem", fontWeight: "500" }}
              >
                {item.label}:
                <Typography component="span" sx={{ fontWeight: "normal" }}>
                  {" "}
                  {item.value}
                </Typography>
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default ContactDetail;