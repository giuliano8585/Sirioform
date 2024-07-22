// src/components/RegisterInstructor.js
import React, { useState } from 'react';
import axios from 'axios';

const RegisterInstructor = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    fiscalCode: '',
    brevetNumber: '',
    qualifications: '',
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/instructors/register', formData);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
      <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
      <input type="text" name="fiscalCode" value={formData.fiscalCode} onChange={handleChange} placeholder="Fiscal Code" />
      <input type="text" name="brevetNumber" value={formData.brevetNumber} onChange={handleChange} placeholder="Brevet Number" />
      <input type="text" name="qualifications" value={formData.qualifications} onChange={handleChange} placeholder="Qualifications" />
      <input type="text" name="piva" value={formData.piva} onChange={handleChange} placeholder="PIVA" />
      <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
      <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" />
      <input type="text" name="region" value={formData.region} onChange={handleChange} placeholder="Region" />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
      <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
      <input type="password" name="repeatPassword" value={formData.repeatPassword} onChange={handleChange} placeholder="Repeat Password" />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterInstructor;

