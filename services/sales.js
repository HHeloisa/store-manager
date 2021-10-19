const salesModels = require('../models/sales');
const { codes, errors } = require('../messages');

async function getAllSales() {
  const allSales = await salesModels.getAllSales();
  return { sales: allSales };
}

async function findSaleById(id) {
  const findSale = await salesModels.findSaleById(id);
  if (!findSale) { 
    return { err: { code: codes.notFound, message: errors.saleNotFound } };
  }
  return { findSale };
}

async function insertSale(itensSold) {
  const insertedSale = await salesModels.insertSale(itensSold);
  return { insertedSale };
}

async function updateSale(id, itensSold) {
  const update = await salesModels.updateSale(id, itensSold);
  if (!update) { 
    return { err: { code: codes.invalidData, message: errors.invalidIdOrQuantity } };
    }
  return { update };
}

module.exports = { getAllSales, findSaleById, insertSale, updateSale };
