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
    <div className="container mt-4">
      <h1 className="mb-4">Lista Istruttori</h1>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Numero Brevetto</th>
              <th>Nome</th>
              <th>Cognome</th>
              <th>P.Iva</th>
              <th>Indirizzo</th>
              <th>Regione</th>
              <th>Telefono</th>
              <th>E-Mail</th>
              <th>Codice Fiscale</th>
              <th>Stato</th>
            </tr>
          </thead>
          <tbody>
            {instructors.map((instructor) => (
              <tr key={instructor._id}>
                <td>{instructor.brevetNumber}</td>
                <td>{instructor.firstName}</td>
                <td>{instructor.lastName}</td>
                <td>{instructor.piva}</td>
                <td>{instructor.address}</td>
                <td>{instructor.region}</td>
                <td>{instructor.phone}</td>
                <td>{instructor.email}</td>
                <td>{instructor.fiscalCode}</td>
                <td>
                  <button className="btn btn-primary mb-2">Abilitazioni</button>
                  <button className="btn btn-danger">Elimina</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="btn btn-secondary" onClick={() => window.history.back()}>Indietro</button>
    </div>
  );
};

export default InstructorList;

