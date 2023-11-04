import React from 'react';
import { Link } from 'react-router-dom';

const ContactList = ({ contacts }) => {
  return (
    <div>
      <h1>Contacts</h1>
      {contacts.map(contact => (
        <div key={contact.id}>
          <Link to={`/contact/${contact.id}`}>{contact.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default ContactList;