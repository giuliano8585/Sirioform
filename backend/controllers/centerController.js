const Center = require('../models/Center');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sendEmail = require('../utils/emailService');
const axios = require('axios');
const Sanitario = require('../models/Sanitario'); // Importa il modello del sanitario

exports.registerCenter = async (req, res) => {
  const { name, piva, address, city, region, email, phone, username, password, repeatPassword, recaptchaToken } = req.body;

  if (password !== repeatPassword) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }

  // Verifica reCAPTCHA
  const secretKey = process.env.RECAPTCHA_SECRET_KEY; // Inserisci la tua reCAPTCHA Secret Key qui o nel file .env
  const response = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`);

  if (!response.data.success) {
    return res.status(400).json({ error: 'reCAPTCHA validation failed' });
  }

  try {
    const existingCenter = await Center.findOne({ username });
    if (existingCenter) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newCenter = new Center({
      name,
      piva,
      address,
      city,
      region,
      email,
      phone,
      username,
      password: hashedPassword,
      isActive: false,
      sanitarios: [] // Inizializza l'array dei sanitari
    });

    await newCenter.save();

    // Invia email di conferma
    sendEmail(email, 'Registrazione Centro', 'Grazie per esserti registrato! Il tuo account è in attesa di approvazione.');

    res.status(201).json(newCenter);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getUnapprovedCenters = async (req, res) => {
  try {
    const centers = await Center.find({ isActive: false });
    res.json(centers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.approveCenter = async (req, res) => {
  try {
    const center = await Center.findByIdAndUpdate(req.params.id, { isActive: true }, { new: true });

    // Invia email di conferma
    sendEmail(center.email, 'Account Attivato', 'Il tuo account è stato approvato e attivato. Puoi ora accedere al sistema.');

    res.json(center);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllCenters = async (req, res) => {
  try {
    const centers = await Center.find({ isActive: true });
    res.json(centers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCenterById = async (req, res) => {
  try {
    const center = await Center.findById(req.params.id);
    if (!center) {
      return res.status(404).json({ error: 'Center not found' });
    }
    res.json(center);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Assegna un sanitario a un centro
exports.assignSanitario = async (req, res) => {
  const { centerId, sanitarioId } = req.body;
  try {
    const center = await Center.findById(centerId);
    if (!center) {
      return res.status(404).json({ error: 'Center not found' });
    }

    if (center.sanitarios.includes(sanitarioId)) {
      return res.status(400).json({ error: 'Sanitario already assigned to this center' });
    }

    center.sanitarios.push(sanitarioId);
    await center.save();
    res.status(200).json(center);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Ottiene i sanitari assegnati a un centro
exports.getAssignedSanitarios = async (req, res) => {
  try {
    const center = await Center.findById(req.params.id).populate('sanitarios');
    if (!center) {
      return res.status(404).json({ error: 'Center not found' });
    }
    res.status(200).json(center.sanitarios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Rimuove un sanitario da un centro
exports.removeSanitario = async (req, res) => {
  const { centerId, sanitarioId } = req.body;
  try {
    const center = await Center.findById(centerId);
    if (!center) {
      return res.status(404).json({ error: 'Center not found' });
    }

    center.sanitarios.pull(sanitarioId);
    await center.save();
    res.status(200).json(center);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
