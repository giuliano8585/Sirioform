// controllers/instructorController.js
const Instructor = require('../models/Instructor');

exports.registerInstructor = async (req, res) => {
  const { firstName, lastName, fiscalCode, brevetNumber, qualifications, piva, address, city, region, email, phone, username, password } = req.body;

  try {
    const newInstructor = new Instructor({ firstName, lastName, fiscalCode, brevetNumber, qualifications, piva, address, city, region, email, phone, username, password });
    await newInstructor.save();
    res.status(201).json(newInstructor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
