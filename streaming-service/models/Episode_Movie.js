const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Series_Film = require('./Series_Film');

const Episode_Movie = sequelize.define('Episode_Movie', {
  episode_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  release_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

// Relasi antara Episode_Movie dan Series_Film
Episode_Movie.belongsTo(Series_Film, { foreignKey: 'series_id' });  // Episode_Movie berhubungan dengan satu Series_Film
Series_Film.hasMany(Episode_Movie, { foreignKey: 'series_id' });  // Series_Film bisa memiliki banyak Episode_Movie

module.exports = Episode_Movie;
