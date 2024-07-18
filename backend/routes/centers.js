// routes/centers.js
const express = require('express');
const router = express.Router();
const { registerCenter, getUnapprovedCenters, approveCenter, getAllCenters } = require('../controllers/centerController');

router.post('/register', registerCenter);
router.get('/unapproved', getUnapprovedCenters);
router.put('/approve/:id', approveCenter);
router.get('/', getAllCenters);

module.exports = router;


