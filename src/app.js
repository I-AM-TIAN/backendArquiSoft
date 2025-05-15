const express = require('express');
const productRoutes = require('./products/product.view');
const categoryRoutes = require('./categories/category.view');
const paymentMethodRoutes = require('./paymentMethods/paymentMethod.view');
const customerRoutes = require('./customers/customer.view');
const saleRoutes = require('./sales/sale.view');
const inventoryRoutes = require('./inventory/inventory.view');
const salesReportRoutes = require('./salesreports/salesreport.view');
const proveedorRoutes = require('./proveedores/proveedores.view');
const shipmentRoutes = require('./shipments/shipment.view');
const promotionRoutes = require('./promotions/promotion.view');

const app = express();
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/payment-methods', paymentMethodRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/sales', saleRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/sales-reports', salesReportRoutes);
app.use('/api/proveedores', proveedorRoutes);
app.use('/api/envios', shipmentRoutes);
app.use('/api/promotions', promotionRoutes);


module.exports = app;
