const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mlakovic', 'mlakovic', '11', {
  host: 'ucka.veleri.hr',
  dialect: 'mysql',
  logging: false, // možeš maknuti ili staviti true za debug
});

module.exports = sequelize;
