const connection = require('./connection');

const getAllSales = async () => {
  const db = await connection();
  const allSales = await db.collection('sales').find().toArray();
  return allSales;
};

const insertSale = async (itensSold) => {
  const db = await connection();
  const sale = await db.collection('sales').insertOne({ itensSold });
  
  return { _id: sale.insertedId, itensSold };
};

module.exports = { getAllSales, insertSale };
