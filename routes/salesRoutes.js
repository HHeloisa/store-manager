const router = require('express').Router();
const salesController = require('../controllers/sales');
const { validateSales } = require('../validations/validations');

router.get('/', salesController.getAllSales);
router.post('/', validateSales, salesController.insertSale);

module.exports = router;
