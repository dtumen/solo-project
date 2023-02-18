const { sequelize } = require('../models');

async function Dbconnect() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error.message);
  }
}

module.exports = Dbconnect