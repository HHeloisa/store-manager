const salesModels = require('../models/sales');

async function getAllSales() {
  const allSales = await salesModels.getAllSales();
  return { sales: allSales };
}

async function insertSale(itensSold) {
  const insertedSale = await salesModels.insertSale(itensSold);
  return { insertedSale };
}

module.exports = { getAllSales, insertSale };
