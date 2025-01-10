const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nama: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Relasi One-to-Many
User.hasMany(Order, { foreignKey: 'user_id' });  // Seorang user bisa memiliki banyak order

// Relasi Many-to-Many dengan Product melalui tabel perantara 'user_products'
User.belongsToMany(Product, { 
  through: 'user_products',
  foreignKey: 'user_id',
});

module.exports = User;
