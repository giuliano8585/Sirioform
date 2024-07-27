import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ViewSanitarios = () => {
  const [sanitarios, setSanitarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSanitarios = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log('Using token:', token); // Verifica il token nel client
        const res = await axios.get('http://localhost:5000/api/centers/me/sanitarios', {
          headers: {
            'x-auth-token': token
          }
        });
        setSanitarios(res.data);
        setLoading(false);
      } catch (err) {
        setError(err.response ? err.response.data.error : 'An error occurred');
        setLoading(false);
      }
    };

    fetchSanitarios();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Lista Sanitari</h1>
      <ul className="list-group">
        {sanitarios.map((sanitario) => (
          <li key={sanitario._id} className="list-group-item">
            {sanitario.firstName} {sanitario.lastName}
          </li>
        ))}
      </ul>
      <button className="btn btn-secondary mt-4" onClick={() => navigate('/center-dashboard')}>
        Indietro
      </button>
    </div>
  );
};

export default ViewSanitarios;

