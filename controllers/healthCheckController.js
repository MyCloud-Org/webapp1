const HealthCheck = require('../models/healthCheck');

const createHealthCheck = async (req, res) => {
  // Check if there's any payload in the request body (should not allow payload)
  if (Object.keys(req.body).length > 0) {
    return res.status(400).send();
  }

  try {
    // Create a new health check with current UTC timestamp
    const healthCheck = await HealthCheck.create({
      datetime: new Date().toISOString(),  // Current UTC time
    });

    // Return 200 OK response with an empty body (as required)
    res.status(200).send();
  } catch (error) {
    console.error('Error creating health check:', error);
    // Return 503 if insertion fails (Service Unavailable)
    res.status(503).send();
  }
};

module.exports = { createHealthCheck };
