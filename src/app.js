const express = require('express');
const cors = require('cors'); // <--- Agrega esta línea
const productRoutes = require('./products/product.view');
const categoryRoutes = require('./categories/category.view');
const paymentMethodRoutes = require('./paymentMethods/paymentMethod.view');
const customerRoutes = require('./customers/customer.view');
const saleRoutes = require('./sales/sale.view');
const inventoryRoutes = require('./inventory/inventory.view');
const salesReportRoutes = require('./salesreports/salesreport.view');
const proveedorRoutes = require('./proveedores/proveedores.view');
const shipmentRoutes = require('./shipments/shipment.view');
const productsaleresportRoutes = require('./productsalereports/productsaleresport.view');
const authMiddleware = require('./auth/auth.middleware');
const app = express();

app.use(cors()); // <--- Habilita CORS para todos
app.use(express.json());

app.use('/api/products', authMiddleware, productRoutes);
app.use('/api/categories', authMiddleware, categoryRoutes);
app.use('/api/payment-methods', authMiddleware, paymentMethodRoutes);
app.use('/api/customers', authMiddleware, customerRoutes);
app.use('/api/sales', authMiddleware, saleRoutes);
app.use('/api/inventory', authMiddleware, inventoryRoutes);
app.use('/api/sales-reports', authMiddleware, salesReportRoutes);
app.use('/api/proveedores', authMiddleware, proveedorRoutes);
app.use('/api/envios', authMiddleware, shipmentRoutes);
app.use('/api/reporte-ventas-productos', authMiddleware, productsaleresportRoutes);

module.exports = app;