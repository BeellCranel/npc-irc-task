const ApiError = require("../error/ApiError");
const { Car } = require("../models/models");

class CarController {
  async getCars(req, res) {
    const cars = await Car.findAll();
    return res.status(200).json(cars);
  }

  async createCar(req, res) {
    const { name, price, type, brand, buildDate } = req.body;
    const car = await Car.create({ name, price, type, brand, buildDate });
    return res.status(200).json(car);
  }

  async deleteCar(req, res, next) {
    const id = req.params.id;

    if (!id) {
      return next(ApiError.badRequest("Не задан ID"));
    }

    const car = await Car.destroy({
      where: { id },
    });
    return res.status(200).json({message: 'Успешно удалено'});
  }
}

module.exports = new CarController();
