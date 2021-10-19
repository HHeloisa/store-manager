const router = require('express').Router();
const productsController = require('../controllers/products');
const { validateProducts } = require('../validations/validations');

router.get('/', productsController.getAll);
router.post('/', validateProducts, productsController.insertProduct);

module.exports = router;
