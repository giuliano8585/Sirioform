// models/Center.js
// models/Center.js
const mongoose = require('mongoose');

const CenterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  piva: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  region: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  isActive: { type: Boolean, default: false }
});

module.exports = mongoose.model('Center', CenterSchema);


