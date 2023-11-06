import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactList from './components/ContactList';
import ContactDetail from './components/ContactDetail';
import NotFound from './components/NotFound';
import { Box, CircularProgress, Typography} from '@mui/material';
import './App.css'

function App() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios('https://jsonplaceholder.typicode.com/users');
        setContacts(result.data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) 
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  
  if (error) return <Typography variant="h6">Error loading contacts.</Typography>;

  return (
    <Router>
      <Box className="App">
        <Routes>
          <Route path="/" element={<ContactList contacts={contacts} />} />
          <Route path="/contact/:id" element={<ContactDetail contacts={contacts} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;