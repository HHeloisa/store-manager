const { ObjectId } = require('mongodb');
const connection = require('./connection');

const getAllSales = async () => {
  const db = await connection();
  const allSales = await db.collection('sales').find().toArray();
  return allSales;
};

const findSaleById = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  const db = await connection();
  const findOne = await db.collection('sales').findOne({ _id: ObjectId(id) });
  return findOne;
};

const insertSale = async (itensSold) => {
  const db = await connection();
  const sale = await db.collection('sales').insertOne({ itensSold });
  
  return { _id: sale.insertedId, itensSold };
};

module.exports = { getAllSales, findSaleById, insertSale };
