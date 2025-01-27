const express = require('express');
const healthCheckRoute = require('./routes/healthCheckRoute');  // Health check route import
const preventCache = require('./middleware/cacheControl');  // Cache control middleware
const sequelize = require('./config/db');  // Sequelize instance import

const app = express();
const port = 8080;

// Use cache-control middleware to prevent caching
app.use(preventCache);

// Use the health check route
app.use(healthCheckRoute);

// Sync Sequelize models with the database (create tables if they don't exist)
sequelize.sync({ force: false })  // This ensures the table is created if it doesn't exist
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });

// Start the Express server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
