const prisma = require('../lib/prisma');

exports.getAll = async (req, res) => {
    try {
        const paymentMethods = await prisma.paymentMethod.findMany();
        res.json(paymentMethods);
    } catch (error) {
        console.error('Error fetching payment methods:', error);
        res.status(500).json({ error: 'Failed to fetch payment methods' });
    }
}

exports.create = async (req, res) => {
    const { name, description } = req.body;
    try {
        const paymentMethod = await prisma.paymentMethod.create({
            data: {
                name,
                description
            }
        });
        res.status(201).json(paymentMethod);
    } catch (error) {
        console.error('Error creating payment method:', error);
        res.status(500).json({ error: 'Failed to create payment method' });
    }
}

exports.update = async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    try {
        const paymentMethod = await prisma.paymentMethod.update({
            where: { id: parseInt(id) },
            data: {
                name,
                description
            }
        });
        res.json(paymentMethod);
    } catch (error) {
        console.error('Error updating payment method:', error);
        res.status(500).json({ error: 'Failed to update payment method' });
    }
}

exports.delete = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.paymentMethod.delete({
            where: { id: parseInt(id) }
        });
        res.status(204).send();
    } catch (error) {
        console.error('Error deleting payment method:', error);
        res.status(500).json({ error: 'Failed to delete payment method' });
    }
}