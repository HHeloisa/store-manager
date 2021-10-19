const { codes, errors } = require('../messages');

const lengthMin = (value, length) => value.length < length;
const lessOrEqual = (value, length) => value <= length;
const isString = (value) => typeof value === 'string';

/* =======================================================================
                    VALIDATION PRODUCTS MIDDLEWARE
========================================================================== */

const validateProducts = (req, res, next) => {
  const { name, quantity } = req.body;
    if (lengthMin(name, 5)) {
      return res.status(422).json({ err: { code: codes.invalidData, message: errors.nameLength } });
    }
    if (lessOrEqual(quantity, 0)) {
      return res.status(422).json({ err: { code: codes.invalidData, message: errors.qntLarger } });
    }
    if (isString(quantity)) {
      return res.status(422).json({ err: { code: codes.invalidData, message: errors.qntNumber } });
    }
  next();
};

/* =======================================================================
                    VALIDATION SALES MIDDLEWARE
========================================================================== */

const validateSales = (req, res, next) => {
  const itensSold = req.body;
  const check1 = itensSold.some((sale) => lessOrEqual(sale.quantity, 0));
  const check2 = itensSold.some((sale) => isString(sale.quantity));
  if (check1 || check2) {
    return res.status(422).json({ err: { code: codes.invalidData, message: errors.sale } });
  }
  next();
};

module.exports = { validateProducts, validateSales };
