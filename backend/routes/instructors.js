const express = require('express');
const router = express.Router();
const { registerInstructor, getUnapprovedInstructors, approveInstructor, getAllInstructors, getInstructorById } = require('../controllers/instructorController');

router.post('/register', registerInstructor);
router.get('/unapproved', getUnapprovedInstructors);
router.put('/approve/:id', approveInstructor);
router.get('/', getAllInstructors);
router.get('/:id', getInstructorById); // Aggiungi questa riga

module.exports = router;



