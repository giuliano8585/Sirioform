// src/components/RegisterCenter.js
import React, { useState } from 'react';
import axios from 'axios';

const RegisterCenter = () => {
  const [formData, setFormData] = useState({
    name: '',
    piva: '',
    address: '',
    city: '',
    region: '',
    email: '',
    phone: '',
    username: '',
    password: '',
    repeatPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/centers/register', formData);
      console.log(res.data);
    } catch (err) {
      console.error('Error response:', err.response.data); // Log the error response
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input name="piva" value={formData.piva} onChange={handleChange} placeholder="P. IVA" required />
      <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
      <input name="city" value={formData.city} onChange={handleChange} placeholder="City" required />
      <input name="region" value={formData.region} onChange={handleChange} placeholder="Region" required />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
      <input name="username" value={formData.username} onChange={handleChange} placeholder="Username" required />
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
      <input type="password" name="repeatPassword" value={formData.repeatPassword} onChange={handleChange} placeholder="Repeat Password" required />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterCenter;

