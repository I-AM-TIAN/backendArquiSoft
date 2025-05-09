const prisma = require('../lib/prisma');

exports.getAll = async (req, res) => {
    try {
        const sales = await prisma.sale.findMany({
            include: {
                customer: true,
                paymentMethod: true,
                saleItems: {
                    include: {
                        product: true
                    }
                }
            }
        });
        res.json(sales);
    } catch (error) {
        console.error('Error fetching sales:', error);
        res.status(500).json({ error: 'Failed to fetch sales' });
    }
}

exports.create = async (req, res) => {
    try {
        const { productId, quantity, customerId, paymentMethodId } = req.body;

        // Obtener el producto antes de la creación de la venta
        const productAct = await prisma.product.findUnique({
            where: { id: parseInt(productId) },
        });

        // Verifica si el producto existe
        if (!productAct) {
            return res.status(404).json({ error: 'Product not found' });
        }

        const total = quantity * productAct.price;

        const newSale = await prisma.sale.create({
            data: {
                product: {
                    connect: { id: parseInt(productId) },
                },
                quantity: parseInt(quantity),
                total: total,
                customer: {
                    connect: { id: parseInt(customerId) },
                },
                paymentMethod: {
                    connect: { id: parseInt(paymentMethodId) },
                },
                createdAt: new Date(),
            },
        });

        res.status(201).json(newSale);
    } catch (error) {
        console.error('Error creating sale:', error);
        res.status(500).json({ error: 'Error creating sale', details: error.message });
    }
};

exports.update = async (req, res) => {
    const { id } = req.params;
    const { total, createdAt, productId, paymentMethodId, customerId, quantity } = req.body;
    try {
        const updatedSale = await prisma.sale.update({
            where: { id: parseInt(id) },
            data: {
                total,
                createdAt,
                productId,
                paymentMethodId,
                customerId,
                quantity
            }
        });
        res.json(updatedSale);
    } catch (error) {
        console.error('Error updating sale:', error);
        res.status(500).json({ error: 'Failed to update sale' });
    }
}

exports.delete = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.sale.delete({
            where: { id: parseInt(id) }
        });
        res.status(204).send();
    } catch (error) {
        console.error('Error deleting sale:', error);
        res.status(500).json({ error: 'Failed to delete sale' });
    }
}
