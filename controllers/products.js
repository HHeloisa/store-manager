const productsServices = require('../services/products');

async function getAll(_req, res) {
  try {
    const allProducts = await productsServices.getAll();
    return res.status(200).json(allProducts);
  } catch (err) {
    return res.status(500).json({ message: 'não deu' });
  }
}

async function findById(req, res) {
  try {
    const { id } = req.params;
    console.log({ req });
    const { err, findOne } = await productsServices.findById(id);
    if (err) return res.status(422).json({ err });

    return res.status(200).json(findOne);
  } catch (err) {
    return res.status(500).json({ message: 'deu ruim geral' });
  }
}

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

module.exports = { getAll, findById, insertProduct };
