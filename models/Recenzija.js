const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // ili gdje god ti je konekcija

const Recenzija = sequelize.define('Recenzija', {
    ID_recenzije: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    ID_terena: { type: DataTypes.INTEGER },
    Ocjena: { type: DataTypes.INTEGER, allowNull: false },
    Komentar: { type: DataTypes.TEXT }
  }, { timestamps: false });
  
  module.exports = Recenzija;