const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // ili gdje god ti je konekcija

const Sport = sequelize.define('Sport', {
    ID_sporta: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    Naziv_sporta: { type: DataTypes.STRING, allowNull: false },
    Opis: { type: DataTypes.STRING, allowNull: false }
  }, { timestamps: false });
  
  module.exports = Sport;