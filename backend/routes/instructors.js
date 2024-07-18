// routes/instructors.js
const express = require('express');
const router = express.Router();
const { registerInstructor, getUnapprovedInstructors, approveInstructor, getAllInstructors } = require('../controllers/instructorController');

router.post('/register', registerInstructor);
router.get('/unapproved', getUnapprovedInstructors);
router.put('/approve/:id', approveInstructor);
router.get('/', getAllInstructors);

module.exports = router;


