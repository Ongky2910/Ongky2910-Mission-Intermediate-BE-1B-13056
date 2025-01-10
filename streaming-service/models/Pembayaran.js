
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Order = require('./Order');

// Definisikan model Pembayaran
const Pembayaran = sequelize.define('Pembayaran', {
  pembayaran_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tanggal_pembayaran: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  jumlah: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  metode_pembayaran: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  order_id: {  // Assuming Pembayaran relates to Order
    type: DataTypes.INTEGER,
    references: {
      model: 'Orders', // referring to 'Order' table
      key: 'order_id',
    },
  },
});

// Relasi antara Pembayaran dan Order (One-to-Many)
Pembayaran.belongsTo(Order, { foreignKey: 'order_id' });  // Pembayaran berhubungan dengan satu Order
Order.hasMany(Pembayaran, { foreignKey: 'order_id' });  // Satu Order bisa memiliki banyak Pembayaran

module.exports = Pembayaran;
