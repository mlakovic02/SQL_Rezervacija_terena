const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // ili gdje god ti je konekcija

const Rezervacija = sequelize.define('Rezervacija', {
    ID_rezervacije: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    ID_terena: { type: DataTypes.INTEGER, allowNull: false },
    ID_sporta: { type: DataTypes.INTEGER, allowNull: false },
    Datum: { type: DataTypes.DATEONLY, allowNull: false },
    Vrijeme: { type: DataTypes.TIME, allowNull: false },
    Trajanje: { type: DataTypes.INTEGER, allowNull: false }
  }, { timestamps: false });
  
  module.exports = Rezervacija;
  