const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');  

const Order = sequelize.define('Order', {
  order_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  order_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  total_amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  user_id: {  
    type: DataTypes.INTEGER,
    references: {
      model: 'Users', 
      key: 'user_id',
    },
  },
});

// Relasi kebalikannya
Order.belongsTo(User, { foreignKey: 'user_id' });  // Setiap order berhubungan dengan satu user

module.exports = Order;