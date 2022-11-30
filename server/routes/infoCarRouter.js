const Router = require("express");
const router = new Router();
const InfoCarController = require("../controllers/infoCarController");

router.get("/", InfoCarController.getInfoCar);
router.post("/", InfoCarController.createInfoCar);
router.delete('/:id', InfoCarController.deleteInfoCard);

module.exports = router;
