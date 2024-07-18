// routes/centers.js
const express = require('express');
const router = express.Router();
const { registerCenter } = require('../controllers/centerController');

router.post('/register', registerCenter);

module.exports = router;

