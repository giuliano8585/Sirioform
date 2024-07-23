import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateKit = () => {
  const [kitData, setKitData] = useState({
    code: '',
    type: '',
    description: '',
    cost1: '',
    cost2: '',
    cost3: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setKitData({ ...kitData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/kits/create', kitData);
      alert('Kit creato con successo!');
      navigate('/admin-dashboard');
    } catch (err) {
      console.error(err);
      alert('Errore nella creazione del kit.');
    }
  };

  const goBack = () => {
    navigate('/admin-dashboard');
  };

  return (
    <div>
      <h1>Crea Kit</h1>
      <form onSubmit={handleSubmit}>
        <input name="code" value={kitData.code} onChange={handleChange} placeholder="Codice Kit" required />
        <input name="type" value={kitData.type} onChange={handleChange} placeholder="Tipologia" required />
        <input name="description" value={kitData.description} onChange={handleChange} placeholder="Descrizione" required />
        <input name="cost1" value={kitData.cost1} onChange={handleChange} placeholder="Costo 1" required />
        <input name="cost2" value={kitData.cost2} onChange={handleChange} placeholder="Costo 2" required />
        <input name="cost3" value={kitData.cost3} onChange={handleChange} placeholder="Costo 3" required />
        <button type="submit">Crea</button>
        <button type="button" onClick={goBack}>Indietro</button>
      </form>
    </div>
  );
};

export default CreateKit;

