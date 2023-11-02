import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://jsonplaceholder.typicode.com/users');
      setContacts(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Contacts</h1>
      {contacts.map(contact => (
        <div key={contact.id}>
          <h2>{contact.name}</h2>
          <p>{contact.email}</p>
          <p>Username: {contact.username}</p>
          <p>Phone: {contact.phone}</p>
          <p>Website: {contact.website}</p>
          <p>Company: {contact.company.name}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;