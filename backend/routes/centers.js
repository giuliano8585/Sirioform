const express = require('express');
const router = express.Router();
const { registerCenter, getUnapprovedCenters, approveCenter, getAllCenters, getCenterById } = require('../controllers/centerController');

router.post('/register', registerCenter);
router.get('/unapproved', getUnapprovedCenters);
router.put('/approve/:id', approveCenter);
router.get('/', getAllCenters);
router.get('/:id', getCenterById); // Aggiungi questa riga

module.exports = router;


