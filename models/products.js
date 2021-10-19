const { ObjectId } = require('mongodb');
const connection = require('./connection');

const getAll = async () => {
  const db = await connection();
  const allProducts = await db.collection('products').find().toArray();
  return allProducts;
};

const findById = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const db = await connection();
  const findOne = await db.collection('products').findOne({ _id: ObjectId(id) });
  return findOne;
};

const create = async (name, quantity) => {
  const db = await connection();
  const product = await db.collection('products').insertOne({ name, quantity });
  return { _id: product.insertedId, name, quantity };
};

const findByName = async (name) => {
  const db = await connection();
  const productName = await db.collection('products').findOne({ name });

  return productName;
};

module.exports = { getAll, create, findByName, findById };
