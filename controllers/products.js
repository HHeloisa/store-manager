const productsServices = require('../services/products');

async function insertProduct(req, res) {
  try {
  const { name, quantity } = req.body;
  const { err, newProductService } = await productsServices.insertProduct(name, quantity);
  if (err) return res.status(422).json({ err });

  return res.status(201).json(newProductService);
  } catch (err) {
  return res.status(500).json({ message: 'não deu' });
  }
}

module.exports = { insertProduct };
