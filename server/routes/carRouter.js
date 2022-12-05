const Router = require("express");
const router = new Router();
const CarController = require("../controllers/carController");

router.get("/", CarController.getCars);
router.post("/", CarController.createCar);
router.patch("/:id", CarController.updateCar);
router.delete("/:id", CarController.deleteCar);

module.exports = router;
