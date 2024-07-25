const express = require('express');
const router = express.Router();
const { 
  registerInstructor, 
  getUnapprovedInstructors, 
  approveInstructor, 
  getAllInstructors, 
  getInstructorById, 
  assignSanitario, 
  getAssignedSanitarios, 
  removeSanitario 
} = require('../controllers/instructorController');

router.post('/register', registerInstructor);
router.get('/unapproved', getUnapprovedInstructors);
router.put('/approve/:id', approveInstructor);
router.get('/', getAllInstructors);
router.get('/:id', getInstructorById);
router.post('/assign-sanitario', assignSanitario); // Aggiungi questa riga per assegnare un sanitario
router.get('/:id/sanitarios', getAssignedSanitarios); // Aggiungi questa riga per ottenere i sanitari assegnati
router.post('/remove-sanitario', removeSanitario); // Aggiungi questa riga per rimuovere un sanitario

module.exports = router;





