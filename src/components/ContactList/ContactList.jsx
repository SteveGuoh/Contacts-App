import React from 'react';
import { Link } from 'react-router-dom';
import { Container, List, ListItem, Typography } from '@mui/material';

const ContactList = ({ contacts }) => (
  <Container>
    <Typography variant="h2">Contacts</Typography>
    <List>
      {contacts.map((contact) => (
        <ListItem key={contact.id}>
          <Link to={`/contact/${contact.id}`}>{contact.name}</Link>
        </ListItem>
      ))}
    </List>
  </Container>
);

export default ContactList;