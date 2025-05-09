
const express = require('express');
const productRoutes = require('./products/product.view');
const categoryRoutes = require('./categories/category.view');
const paymentMethodRoutes = require('./paymentMethods/paymentMethod.view');
const customerRoutes = require('./customers/customer.view');
const saleRoutes = require('./sales/sale.view');
<<<<<<< HEAD
const inventoryRoutes = require('./inventory/inventory.view');  
=======
const salesReportRoutes = require('./salesReports/salesreport.view');

>>>>>>> e35a71ab337507c5ab581ff1620abaaf547d12dc
const app = express();
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/payment-methods', paymentMethodRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/sales', saleRoutes);
<<<<<<< HEAD
app.use('/inventory', inventoryRoutes);

module.exports = app;
=======
app.use('/api/sales-reports', salesReportRoutes);

module.exports = app;
>>>>>>> e35a71ab337507c5ab581ff1620abaaf547d12dc
