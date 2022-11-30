const ApiError = require("../error/ApiError");
const { InfoCar } = require("../models/models.js");

class InfoCarController {
  async getInfoCar(req, res) {
    const infoCars = await InfoCar.findAll();

    return res.status(200).json(infoCars);
  }

  async createInfoCar(req, res) {
    const { title, description, CarId } = req.body;

    const infoCar = await InfoCar.create({ title, description, CarId });

    return res.status(200).json(infoCar);
  }

  async deleteInfoCard(req, res, next) {
    const id = req.params.id;

    if (!id) {
      return next(ApiError.badRequest("Не задан ID"));
    }

    const infoCar = await InfoCar.destroy({
      where: { id },
    });

    return res.status(200).json({ message: "Успешно удалено" });
  }
}

module.exports = new InfoCarController();
