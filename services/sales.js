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

module.exports = { getAllSales, findSaleById, insertSale };
