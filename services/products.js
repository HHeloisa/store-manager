const productsModel = require('../models/products');
const { codes, errors } = require('../messages');

async function getAll() {
  const allProducts = await productsModel.getAll();
  return { products: allProducts };
}

async function findById(id) {
  const findOne = await productsModel.findById(id);
  if (!findOne) return { err: { code: codes.invalidData, message: errors.productIdFormat } };

  return { findOne };
}

async function insertProduct(name, quantity) {
  const checkName = await productsModel.findByName(name);
    if (checkName) {
    return { err: { code: codes.invalidData, message: errors.productExists } };
  }

  const newProductService = await productsModel.create(name, quantity);
  return { newProductService };
}

async function updateProduct(id, name, quantity) {
  const update = await productsModel.updateProduct(id, name, quantity);
 return { update };
}

module.exports = { getAll, insertProduct, findById, updateProduct };
