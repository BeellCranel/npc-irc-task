const ApiError = require("../error/ApiError");
const { InfoCar } = require("../models/models.js");

class InfoCarController {
  getInfoCar(req, res, next) {
    InfoCar.findAll()
      .then((infoCars) => {
        return res.status(200).json(infoCars);
      })
      .catch(next);
  }

  createInfoCar(req, res, next) {
    const { title, description, CarId } = req.body;

    InfoCar.create({ title, description, CarId })
      .then((infoCar) => {
        return res.status(200).json(infoCar);
      })
      .catch((e) => {
        if (e.name === "SequelizeDatabaseError") {
          return next(ApiError.badRequest("Переданы некоректные данные"));
        }
        if (e.name === "SequelizeValidationError") {
          return next(ApiError.badRequest("Переданы некоректные данные"));
        }
        next(e);
      });
  }

  deleteInfoCard(req, res, next) {
    const id = req.params.id;

    InfoCar.destroy({
      where: { id },
    })
      .then(() => {
        return res.status(200).json({ message: "Успешно удалено" });
      })
      .catch((e) => {
        if (e.name === "SequelizeDatabaseError") {
          return next(ApiError.badRequest("Переданы некоректные данные"));
        }
      });
  }
}

module.exports = new InfoCarController();
