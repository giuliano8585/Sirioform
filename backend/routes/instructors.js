// routes/instructors.js
const express = require('express');
const router = express.Router();
const { registerInstructor } = require('../controllers/instructorController');

router.post('/register', registerInstructor);

module.exports = router;
