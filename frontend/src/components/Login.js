// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import '../App.css'; // Percorso corretto per il file CSS

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: 'center'
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Imposta lo stato di caricamento
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      setLoading(false); // Rimuove lo stato di caricamento
      if (formData.role === 'admin') {
        window.location.href = '/admin-dashboard';
      } else {
        window.location.href = '/user-dashboard';
      }
    } catch (err) {
      setLoading(false); // Rimuove lo stato di caricamento in caso di errore
      if (err.response && err.response.data) {
        setErrorMessage(err.response.data.error);
      } else {
        setErrorMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="username" value={formData.username} onChange={handleChange} placeholder="Username" required />
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="center">Center</option>
          <option value="instructor">Instructor</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Login</button>
      </form>
      {loading && <div>Loading...</div>} {/* Mostra il caricamento */}
      {errorMessage && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setErrorMessage('')}>&times;</span>
            <p>{errorMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;



