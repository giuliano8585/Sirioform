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
  removeSanitario,
  getInstructorSanitarios // Assicurati di includere questa funzione
} = require('../controllers/instructorController');
const authMiddleware = require('../middleware/auth'); // Importa il middleware di autenticazione

router.post('/register', registerInstructor);
router.get('/unapproved', getUnapprovedInstructors);
router.put('/approve/:id', approveInstructor);
router.get('/', getAllInstructors);
router.get('/:id', getInstructorById);
router.post('/assign-sanitario', assignSanitario);
router.get('/:id/sanitarios', getAssignedSanitarios);
router.post('/remove-sanitario', removeSanitario);
router.get('/me/sanitarios', authMiddleware, getInstructorSanitarios); // Aggiungi questa riga

module.exports = router;





