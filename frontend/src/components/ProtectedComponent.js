// src/components/ProtectedComponent.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProtectedComponent = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const res = await axios.get('http://localhost:5000/api/protected', {
          headers: { 'x-auth-token': token }
        });
        setData(res.data);
      } catch (err) {
        console.error(err);
        navigate('/login');
      }
    };

    fetchData();
  }, [navigate]);

  if (!data) {
    return <div>Loading...</div>; // Mostra caricamento mentre si attendono i dati
  }

  return (
    <div>
      <h1>Protected Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ProtectedComponent;

