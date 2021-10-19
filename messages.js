const codes = {
  invalidData: 'invalid_data',
  stockProblem: 'stock_problem',
  notFound: 'not_found',
};

const errors = {
  productIdFormat: 'Wrong id format',
  productExists: 'Product already exists',
  nameLength: '"name" length must be at least 5 characters long',
  qntLarger: '"quantity" must be larger than or equal to 1',
  qntNumber: '"quantity" must be a number',
  invalidIdOrQuantity: 'Wrong product ID or invalid quantity',
  saleIdFormat: 'Wrong sale ID format',
  sale: 'Wrong product ID or invalid quantity',
  saleNotFound: 'Sale not found',
  stock: 'Such amount is not permitted to sell',
};

module.exports = { codes, errors };
