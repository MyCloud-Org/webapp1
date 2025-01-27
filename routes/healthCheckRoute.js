const express = require('express');
const { createHealthCheck } = require('../controllers/healthCheckController');

const router = express.Router();

// Health check route - only GET allowed
router.get('/healthz', createHealthCheck);

// Handle unsupported methods (e.g., POST, PUT, DELETE)
router.all('/healthz', (req, res) => {
  res.status(405).send();
});

module.exports = router;
