

const prisma = require('../lib/prisma');

exports.getStock = async (req, res) => {
    try {
        // Sumamos las cantidades de todos los productos en el inventario
        const products = await prisma.product.findMany();
        const totalStock = products.reduce((sum, product) => sum + product.stock, 0);
        
        res.json({ totalStock });
    } catch (error) {
        console.error('Error fetching stock:', error);
        res.status(500).json({ error: 'Failed to fetch stock' });
    }
};
