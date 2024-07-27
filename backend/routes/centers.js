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
  removeSanitario,
  getCenterSanitarios
} = require('../controllers/centerController');
const authMiddleware = require('../middleware/auth');

router.post('/register', registerCenter);
router.get('/unapproved', getUnapprovedCenters);
router.put('/approve/:id', approveCenter);
router.get('/me/sanitarios', authMiddleware, getCenterSanitarios); // Route senza parametri prima
router.get('/', getAllCenters);
router.get('/:id', getCenterById);
router.post('/assign-sanitario', assignSanitario);
router.get('/:id/sanitarios', getAssignedSanitarios);
router.post('/remove-sanitario', removeSanitario);

module.exports = router;


