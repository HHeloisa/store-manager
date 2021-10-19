const router = require('express').Router();
const salesController = require('../controllers/sales');
const { validateSales } = require('../validations/validations');

router.post('/', validateSales, salesController.insertSale);
router.get('/', salesController.getAllSales);
router.get('/:id', salesController.findSaleById);
/* router.put('/:id', validateSales, salesController.updateSale);
router.delete('/:id', salesController.deleteSale); */

module.exports = router;
