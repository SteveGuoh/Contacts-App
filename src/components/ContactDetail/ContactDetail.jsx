import React from 'react';
import { useParams } from 'react-router-dom';

const ContactDetail = ({ contacts }) => {
  const { id } = useParams();
  const contact = contacts.find(contact => contact.id === parseInt(id));

  if (!contact) return <div>Contact not found</div>;

  return (
    <div>
      <h2>{contact.name}</h2>
      <p>Email: {contact.email}</p>
      <p>Username: {contact.username}</p>
      <p>Phone: {contact.phone}</p>
      <p>Website: {contact.website}</p>
      <p>Company: {contact.company.name}</p>
      <p>CatchPhrase: {contact.company.catchPhrase}</p>
      <p>BS: {contact.company.bs}</p>
      <p>Address: {`${contact.address.street}, ${contact.address.suite}, ${contact.address.city}, ${contact.address.zipcode}`}</p>
      <p>Geo: {`Lat: ${contact.address.geo.lat}, Lng: ${contact.address.geo.lng}`}</p>
    </div>
  );
};

export default ContactDetail;