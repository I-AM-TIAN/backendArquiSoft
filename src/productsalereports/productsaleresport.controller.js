const prisma = require('../lib/prisma');

// Reporte de ventas totales por producto y mes
exports.getProductSalesReport = async (req, res) => {
  try {
    // 1. Obtén todas las ventas con producto y fecha
    const sales = await prisma.sale.findMany({
      select: {
        productId: true,
        quantity: true,
        createdAt: true,
        product: { select: { name: true } }
      }
    });

    // 2. Agrupa por producto y mes
    const grouped = {};
    sales.forEach(sale => {
      const month = sale.createdAt.toISOString().slice(0, 7); // 'YYYY-MM'
      const key = `${sale.productId}-${month}`;
      if (!grouped[key]) {
        grouped[key] = {
          productId: sale.productId,
          productName: sale.product?.name || null,
          month,
          totalSold: 0
        };
      }
      grouped[key].totalSold += sale.quantity;
    });

    // 3. Convierte el objeto agrupado a array
    const formatted = Object.values(grouped);

    res.json(formatted);
  } catch (error) {
    res.status(500).json({ error: 'Error al generar el reporte', details: error.message });
  }
};