import React from "react";
import { useParams } from "react-router-dom";
import { Typography, Box, Paper } from "@mui/material";

const ContactDetail = ({ contacts }) => {
  const { id } = useParams();
  const contact = contacts.find((contact) => contact.id === parseInt(id));

  if (!contact) return <Box>Contact not found</Box>;

  return (
    <Paper>
      <Typography variant="h2">{contact.name}</Typography>
      <Typography>Email: {contact.email}</Typography>
      <Typography>Username: {contact.username}</Typography>
      <Typography>Phone: {contact.phone}</Typography>
      <Typography>Website: {contact.website}</Typography>
      <Typography>Company: {contact.company.name}</Typography>
      <Typography>CatchPhrase: {contact.company.catchPhrase}</Typography>
      <Typography>BS: {contact.company.bs}</Typography>
      <Typography>
        Address:{" "}
        {`${contact.address.street}, ${contact.address.suite}, ${contact.address.city}, ${contact.address.zipcode}`}
      </Typography>
      <Typography>
        Geo:{" "}
        {`Lat: ${contact.address.geo.lat}, Lng: ${contact.address.geo.lng}`}
      </Typography>
    </Paper>
  );
};

export default ContactDetail;
