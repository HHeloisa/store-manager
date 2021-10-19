const router = require('express').Router();
const productsController = require('../controllers/products');
const { validateProducts } = require('../validations/validations');

router.get('/', productsController.getAll);
router.get('/:id', productsController.findById);
router.post('/', validateProducts, productsController.insertProduct);
router.put('/', validateProducts, productsController.updateProducts);
/* router.delete('/', productsController.deleteProduct); */

module.exports = router;
