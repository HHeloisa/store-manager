const salesService = require('../services/sales');

async function getAllSales(req, res) {
  try {
    const allSales = await salesService.getAllSales();
    return res.status(200).json(allSales);
  } catch (err) {
    return res.status(500).json({ message: 'deu ruim geral' });
  }
}

async function insertSale(req, res) {
  try {
    const itensSold = req.body;
    const { err, insertedSale } = await salesService.insertSale(itensSold);
    if (err) return res.status(422).json({ err });
    return res.status(200).json(insertedSale);
  } catch (err) {
    return res.status(500).json({ message: 'deu ruim' });
  }
}

module.exports = { getAllSales, insertSale };
