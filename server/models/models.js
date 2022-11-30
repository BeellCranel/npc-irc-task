const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Car = sequelize.define("Car", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
  price: { type: DataTypes.DECIMAL(9, 2), allowNull: false },
  type: { type: DataTypes.STRING, allowNull: false },
  brand: { type: DataTypes.STRING, allowNull: false },
  buildDate: { type: DataTypes.DATE, allowNull: false },
});

const InfoCar = sequelize.define("InfoCar", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
});

Car.hasMany(InfoCar);
InfoCar.belongsTo(Car);

module.exports = {
  Car,
  InfoCar,
};
