const { DataTypes } = require('sequelize');

const sequelize = require('../config/db');

const Teren = sequelize.define('Teren', {
  ID_terena: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  Lokacija: { type: DataTypes.STRING, allowNull: false },
  Tip_terena: { type: DataTypes.STRING, allowNull: false },
  Stanje: { type: DataTypes.STRING, allowNull: false },
  Kapacitet: { type: DataTypes.INTEGER, allowNull: false }
}, { timestamps: false });

module.exports = Teren;
