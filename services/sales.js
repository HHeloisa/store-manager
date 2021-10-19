const salesModels = require('../models/sales');

async function insertSale(itensSold) {
  const insertedSale = await salesModels.insertSale(itensSold);
  return { insertedSale };
}

module.exports = { insertSale };
