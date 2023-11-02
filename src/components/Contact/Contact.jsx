import React from 'react';

const Contact = ({ contact }) => {
  return (
    <div>
      <h2>{contact.name}</h2>
      <p>{contact.email}</p>
      <p>Username: {contact.username}</p>
      <p>Phone: {contact.phone}</p>
      <p>Website: {contact.website}</p>
      <p>Company: {contact.company.name}</p>
      <hr />
    </div>
  );
};

export default Contact;