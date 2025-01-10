const path = require('path');
const sequelize = require('./config/database'); 
const User = require(path.join(__dirname, 'models', 'User'));
console.log('User model loaded');
const Order = require(path.join(__dirname, 'models', 'Order'));
console.log('Order model loaded');
const Episode_Movie = require(path.join(__dirname, 'models', 'Episode_Movie'));
console.log('Episode_Movie model loaded');
const Paket = require(path.join(__dirname, 'models', 'Paket'));
console.log('Paket model loaded');
const Pembayaran = require(path.join(__dirname, 'models', 'Pembayaran'));
console.log('Pembayaran model loaded');
const Series_Film = require(path.join(__dirname, 'models', 'Series_Film'));
console.log('Series_Film model loaded');


const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: true }); // Gunakan force: true untuk menghapus dan membuat ulang tabel
    console.log('Database and tables synced successfully!');
  } catch (err) {
    console.error('Error syncing database:', err);
  }
};


syncDatabase();
