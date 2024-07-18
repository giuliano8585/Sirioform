// controllers/centerController.js
const Center = require('../models/center');
const bcrypt = require('bcryptjs');

exports.registerCenter = async (req, res) => {
  const { name, piva, address, city, region, email, phone, username, password, repeatPassword } = req.body;

  if (password !== repeatPassword) {
    return res.status(400).json({ error: 'Passwords do not match' });
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
      password: hashedPassword
    });

    await newCenter.save();
    res.status(201).json(newCenter);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
