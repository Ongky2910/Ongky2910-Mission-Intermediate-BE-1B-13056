const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');  

const Paket = sequelize.define('Paket', {
  paket_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nama_paket: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  harga: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  durasi: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Relasi antara Paket dan User (Many-to-Many, karena user bisa berlangganan banyak paket)
Paket.belongsToMany(User, {
  through: 'user_paket', // Tabel perantara untuk relasi Many-to-Many
  foreignKey: 'paket_id',
});

User.belongsToMany(Paket, {
  through: 'user_paket',
  foreignKey: 'user_id',
});

module.exports = Paket;
