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
    <div className="container mt-4">
      <h1 className="mb-4">Lista Centri</h1>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Codice Univoco</th>
              <th>Denominazione</th>
              <th>Data Fondazione</th>
              <th>P. Iva</th>
              <th>Indirizzo</th>
              <th>Regione</th>
              <th>Telefono</th>
              <th>Email</th>
              <th>Stato</th>
            </tr>
          </thead>
          <tbody>
            {centers.map((center) => (
              <tr key={center._id}>
                <td>{center.code}</td>
                <td>{center.name}</td>
                <td>{center.foundationDate}</td>
                <td>{center.piva}</td>
                <td>{center.address}</td>
                <td>{center.region}</td>
                <td>{center.phone}</td>
                <td>{center.email}</td>
                <td>
                  <button className="btn btn-primary mb-2">Assegna Sanitario</button>
                  <button className="btn btn-primary mb-2">Istruttori</button>
                  <button className="btn btn-primary mb-2">Assegna Istruttori</button>
                  <button className="btn btn-primary mb-2">Abilita</button>
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

export default CenterList;



