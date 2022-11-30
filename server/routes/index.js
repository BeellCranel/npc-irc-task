const Router = require('express');
const router = new Router();
const carRouter = require('./carRouter');
const infoCarRouter = require('./infoCarRouter');

router.use('/cars', carRouter);
router.use('/info-cars', infoCarRouter);

module.exports = router;