const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Episode_Movie = require('./Episode_Movie'); 
const User = require('./User');

const Series_Film = sequelize.define('Series_Film', {
  series_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  release_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

// Relasi antara Series_Film dan Episode_Movie (One-to-Many)
Series_Film.hasMany(Episode_Movie, { foreignKey: 'series_id' });  // Series_Film memiliki banyak Episode_Movie
Episode_Movie.belongsTo(Series_Film, { foreignKey: 'series_id' });  // Episode_Movie berhubungan dengan satu Series_Film

// Relasi Many-to-Many antara User dan Series_Film melalui Paket
Series_Film.belongsToMany(User, {
  through: 'user_paket',
  foreignKey: 'series_id',
});
User.belongsToMany(Series_Film, {
  through: 'user_paket',
  foreignKey: 'user_id',
});

module.exports = Series_Film;
