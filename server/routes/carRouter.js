const Router = require("express");
const router = new Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "hello!" });
});
router.post("/");
// router.delete('/:id');

module.exports = router;
