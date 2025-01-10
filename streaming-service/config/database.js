const { Sequelize } = require('sequelize');

// Koneksi ke database
const sequelize = new Sequelize('streaming_service', 'root', '12345', {
  host: 'localhost',
  dialect: 'mysql',  
  logging: false,            
});

module.exports = sequelize;
