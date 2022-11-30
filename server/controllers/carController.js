const ApiError = require("../error/ApiError");
const { Car } = require("../models/models");

class CarController {
  getCars(req, res, next) {
    Car.findAll()
      .then((cars) => {
        res.status(200).json(cars);
      })
      .catch(next);
  }

  createCar(req, res, next) {
    const { name, price, type, brand, buildDate } = req.body;
    Car.create({ name, price, type, brand, buildDate })
      .then((car) => {
        res.status(201).json(car);
      })
      .catch((e) => {
        if (e.name === "SequelizeUniqueConstraintError") {
          return next(
            ApiError.conflictError("Машина с этим названием уже есть в базе")
          );
        }
        if (e.name === "SequelizeDatabaseError") {
          return next(ApiError.badRequest("Переданы некоректные данные"));
        }
        if (e.name === "SequelizeValidationError") {
          return next(ApiError.badRequest("Переданы некоректные данные"));
        }
        next(e);
      });
  }

  deleteCar(req, res, next) {
    const id = req.params.id;

    Car.destroy({
      where: { id },
    })
      .then(() => {
        res.status(200).json({ message: "Успешно удалено" });
      })
      .catch((e) => {
        if (e.name === "SequelizeDatabaseError") {
          return next(ApiError.badRequest("Переданы некоректные данные"));
        }
      });
  }
}

module.exports = new CarController();
