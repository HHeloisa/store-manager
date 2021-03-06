const router = require('express').Router();
const productsController = require('../controllers/products');
const { validateProducts } = require('../validations/validations');

router.get('/', productsController.getAll);
router.get('/:id', productsController.findById);
router.post('/', validateProducts, productsController.insertProduct);
router.put('/:id', validateProducts, productsController.updateProducts);
router.delete('/:id', productsController.deleteProduct);

module.exports = router;
