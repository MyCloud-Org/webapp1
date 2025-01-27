const { Sequelize } = require('sequelize');
require('dotenv').config();  // Import dotenv to load environment variables

const sequelize = new Sequelize(
  process.env.DB_NAME,   // Database name from .env file
  process.env.DB_USER,   // Username from .env file
  process.env.DB_PASSWORD, // Password from .env file
  {
    host: process.env.DB_HOST,   // Database host from .env file
    dialect: 'mysql',
  }
);

// Test the database connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();

module.exports = sequelize;
