const express = require('express');
const router = express.Router();
const {
  registerCenter,
  getUnapprovedCenters,
  approveCenter,
  getAllCenters,
  getCenterById,
  assignSanitario,
  getAssignedSanitarios,
  removeSanitario
} = require('../controllers/centerController');

router.post('/register', registerCenter);
router.get('/unapproved', getUnapprovedCenters);
router.put('/approve/:id', approveCenter);
router.get('/', getAllCenters);
router.get('/:id', getCenterById); // Aggiungi questa riga
router.post('/assign-sanitario', assignSanitario); // Aggiungi questa riga per assegnare un sanitario
router.get('/:id/sanitarios', getAssignedSanitarios); // Aggiungi questa riga per ottenere i sanitari assegnati
router.post('/remove-sanitario', removeSanitario); // Aggiungi questa riga per rimuovere un sanitario

module.exports = router;



