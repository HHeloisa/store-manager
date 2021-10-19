const express = require('express');
const bodyParser = require('body-parser');
const productsRoutes = require('./routes/productsRoutes');
// const productsIdRoutes = require('./routes/productsIdRoutes');
/* const salesRoutes = require('./routes/salesRoutes');
const salesIdRoutes = require('./routes/salesIdRoutes'); */

const app = express();
app.use(bodyParser.json());

// app.use('/products/:id', productsIdRoutes);
app.use('/products', productsRoutes);
/* app.use('/sales', salesRoutes);
app.use('/sales/:id', salesIdRoutes); */

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Online');
});
