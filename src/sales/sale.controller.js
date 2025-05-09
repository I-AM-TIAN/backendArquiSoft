const prisma = require('../lib/prisma');

const createSale = async (req, res) => {
    try {
        const { productId, quantity, total, customerId, paymentMethodId } = req.body;

        const newSale = await prisma.sale.create({
            data: {
                product: {
                    connect: { id: parseInt(productId) },
                },
                quantity: parseInt(quantity),
                productAct: await prisma.product.findUnique({
                    where: { id: parseInt(productId) },
                }),
                total: quantity * productAct.price,
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
        res.status(500).json({ error: 'Error creating sale', details: error.message });
    }
};

module.exports = {
    createSale,
};