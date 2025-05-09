const prisma = require('../lib/prisma');

exports.getAll = async (req, res) => {
    try {
        const customers = await prisma.customer.findMany();
        res.json(customers);
    } catch (error) {
        console.error('Error fetching customers:', error);
        res.status(500).json({ error: 'Failed to fetch customers' });
    }
}

exports.create = async (req, res) => {
    const {name, lastname, identification} = req.body;
    try {
        const customer = await prisma.customer.create({
            data: {
                name,
                lastname,
                identification
            }
        });
        res.status(201).json(customer);
    } catch (error) {
        console.error('Error creating customer:', error);
        res.status(500).json({ error: 'Failed to create customer' });
    }
}

exports.update = async (req, res) => {
    const { id } = req.params;
    const { name, lastname, identification } = req.body;
    try {
        const customer = await prisma.customer.update({
            where: { id: parseInt(id) },
            data: {
                name,
                lastname,
                identification
            }
        });
        res.json(customer);
    } catch (error) {
        console.error('Error updating customer:', error);
        res.status(500).json({ error: 'Failed to update customer' });
    }
}

exports.delete = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.customer.delete({
            where: { id: parseInt(id) }
        });
        res.status(204).send();
    } catch (error) {
        console.error('Error deleting customer:', error);
        res.status(500).json({ error: 'Failed to delete customer' });
    }
}