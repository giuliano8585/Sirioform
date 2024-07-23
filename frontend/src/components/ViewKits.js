import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewKits = () => {
  const [kits, setKits] = useState([]);

  useEffect(() => {
    const fetchKits = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/kits', {
          headers: {
            'x-auth-token': token
          }
        });
        setKits(res.data);
      } catch (err) {
        console.error('Errore nel recupero dei Kit', err);
      }
    };

    fetchKits();
  }, []);

  return (
    <div>
      <h2>Visualizza Kit</h2>
      <ul>
        {kits.map(kit => (
          <li key={kit._id}>
            <h3>{kit.code}</h3>
            <p>{kit.type}</p>
            <p>{kit.description}</p>
            <p>Costo 1: {kit.cost1}</p>
            <p>Costo 2: {kit.cost2}</p>
            <p>Costo 3: {kit.cost3}</p>
            <button>Compra</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewKits;
