const Instructor = require('../models/Instructor');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registerInstructor = async (req, res) => {
  const { firstName, lastName, fiscalCode, brevetNumber, qualifications, piva, address, city, region, email, phone, username, password, repeatPassword } = req.body;

  if (password !== repeatPassword) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }

  try {
    const existingInstructor = await Instructor.findOne({ username });
    if (existingInstructor) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newInstructor = new Instructor({
      firstName,
      lastName,
      fiscalCode,
      brevetNumber,
      qualifications,
      piva,
      address,
      city,
      region,
      email,
      phone,
      username,
      password: hashedPassword,
      isActive: false
    });

    await newInstructor.save();
    res.status(201).json(newInstructor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getUnapprovedInstructors = async (req, res) => {
  try {
    const instructors = await Instructor.find({ isActive: false });
    res.json(instructors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.approveInstructor = async (req, res) => {
  try {
    const instructor = await Instructor.findByIdAndUpdate(req.params.id, { isActive: true }, { new: true });
    res.json(instructor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllInstructors = async (req, res) => {
  try {
    const instructors = await Instructor.find({ isActive: true });
    res.json(instructors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
