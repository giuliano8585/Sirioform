// src/components/CenterList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CenterList = () => {
  const [centers, setCenters] = useState([]);

  useEffect(() => {
    const fetchCenters = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/centers');
        setCenters(res.data);
      } catch (err) {
        console.error('Error fetching centers:', err);
      }
    };

    fetchCenters();
  }, []);

  return (
    <div>
      <h1>Lista Centri</h1>
      <ul>
        {centers.map((center) => (
          <li key={center._id}>
            <p>Nome: {center.name}</p>
            <p>Indirizzo: {center.address}</p>
            <p>Città: {center.city}</p>
            <p>Regione: {center.region}</p>
            <p>Email: {center.email}</p>
            <p>Telefono: {center.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CenterList;

