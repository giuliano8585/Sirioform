const Center = require('../models/Center');
const Instructor = require('../models/Instructor');
const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  const { username, password, role } = req.body;

  try {
    let user;
    if (role === 'center') {
      user = await Center.findOne({ username });
    } else if (role === 'instructor') {
      user = await Instructor.findOne({ username });
    } else if (role === 'admin') {
      user = await Admin.findOne({ username });
    }

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    // Check if the user is active
    if (role !== 'admin' && !user.isActive) {
      return res.status(403).json({ error: 'Account not activated. Please contact the administrator.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const payload = {
      user: {
        id: user.id,
        role: role
      }
    };

    jwt.sign(payload, 'yourSecretKey', { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



