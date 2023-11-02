import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Contact from './components/Contact';

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
      {contacts.map(contact => <Contact key={contact.id} contact={contact} />)}
    </div>
  );
}

export default App;