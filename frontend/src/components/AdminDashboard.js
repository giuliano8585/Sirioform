import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [centers, setCenters] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUnapproved = async () => {
      const resCenters = await axios.get('http://localhost:5000/api/centers/unapproved');
      const resInstructors = await axios.get('http://localhost:5000/api/instructors/unapproved');
      setCenters(resCenters.data);
      setInstructors(resInstructors.data);
    };

    fetchUnapproved();
  }, []);

  const approveCenter = async (id) => {
    await axios.put(`http://localhost:5000/api/centers/approve/${id}`);
    setCenters(centers.filter(center => center._id !== id));
  };

  const approveInstructor = async (id) => {
    await axios.put(`http://localhost:5000/api/instructors/approve/${id}`);
    setInstructors(instructors.filter(instructor => instructor._id !== id));
  };

  const goToCreateKit = () => {
    navigate('/create-kit');
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>Centers</h2>
      <ul>
        {centers.map(center => (
          <li key={center._id}>
            {center.name} - <button onClick={() => approveCenter(center._id)}>Approve</button>
          </li>
        ))}
      </ul>
      <h2>Instructors</h2>
      <ul>
        {instructors.map(instructor => (
          <li key={instructor._id}>
            {instructor.firstName} {instructor.lastName} - <button onClick={() => approveInstructor(instructor._id)}>Approve</button>
          </li>
        ))}
      </ul>
      <Link to="/centers-list">Lista Centri</Link>
      <Link to="/instructors-list">Lista Istruttori</Link>
      <button onClick={goToCreateKit}>Crea Kit</button>
    </div>
  );
};

export default AdminDashboard;
