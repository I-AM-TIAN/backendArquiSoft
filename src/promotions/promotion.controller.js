const prisma = require('../lib/prisma');

exports.getAll = async (req, res) => {
    try {
        const sales = await prisma.promotion.findMany({
            include: {
                producto: true
                }
        });
        res.json(promotions);
    } catch (error) {
        console.error('Error fetching promotions:', error);
        res.status(500).json({ error: 'Failed to fetch promotions' });
    }
}

exports.create = async (req, res) => {
    try {
        const {detalle,fechainicio,fechafinal,productId} = req.body;

         // Obtener el producto antes de la creación de la promoción
        const productAct = await prisma.product.findUnique({
            where: { id: parseInt(productId) },
        });

        // Verifica si el producto existe
        if (!productAct) {
            return res.status(404).json({ error: 'Product not found' });
        }

        const promotion = await prisma.promotion.create({
            data: {
                detalle,
                fechainicio,
                fechafinal,
                product: {
                    connect: { id: parseInt(productId) },
                },
            }
        });
        res.status(201).json(promotion);
    } catch (error) {
        console.error('Error creating promotion:', error);
        res.status(500).json({ error: 'Failed to create promotion' });
    }
}

exports.update = async (req, res) => {
    const { id } = req.params;
    const { detalle,fechainicio,fechafinal,productId } = req.body;
    try {
        const promotion = await prisma.promotion.update({
            where: { id: parseInt(id) },
            data: {
               detalle,
               fechainicio,
               fechafinal,
               productId
            }
        });
        res.json(promotion);
    } catch (error) {
        console.error('Error updating promotion:', error);
        res.status(500).json({ error: 'Failed to update promotion' });
    }
}

exports.delete = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.promotion.delete({
            where: { id: parseInt(id) }
        });
        res.status(204).send();
    } catch (error) {
        console.error('Error deleting promotion:', error);
        res.status(500).json({ error: 'Failed to delete promotion' });
    }
}