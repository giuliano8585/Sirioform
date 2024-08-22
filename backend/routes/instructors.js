const express = require('express');
const auth = require('../middleware/auth');
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

const router = express.Router();

router.post('/register', registerInstructor);
router.get('/unapproved', getUnapprovedInstructors);
router.put('/approve/:id', approveInstructor);
router.get('/', getAllInstructors);
router.get('/:id', getInstructorById);
router.post('/assign-sanitario', assignSanitario);
router.get('/:id/sanitarios', getAssignedSanitarios);
router.post('/remove-sanitario', removeSanitario);
router.get('/:instructorId/sanitarios', auth, getInstructorSanitarios);

module.exports = router;
