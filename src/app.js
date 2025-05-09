const express = require('express');
const productRoutes = require('./products/product.view');
const categoryRoutes = require('./categories/category.view');
const paymentMethodRoutes = require('./paymentMethods/paymentMethod.view');
const customerRoutes = require('./customers/customer.view');

const app = express();
app.use(express.json());
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/payment-methods', paymentMethodRoutes);
app.use('/api/customers', customerRoutes);


module.exports = app;