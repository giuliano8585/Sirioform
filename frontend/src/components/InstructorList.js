// src/components/InstructorList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InstructorList = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/instructors');
        setInstructors(res.data);
      } catch (err) {
        console.error('Error fetching instructors:', err);
      }
    };

    fetchInstructors();
  }, []);

  return (
    <div>
      <h1>Lista Istruttori</h1>
      <ul>
        {instructors.map((instructor) => (
          <li key={instructor._id}>
            <p>Nome: {instructor.firstName} {instructor.lastName}</p>
            <p>Email: {instructor.email}</p>
            <p>Telefono: {instructor.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InstructorList;

