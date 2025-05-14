const prisma = require('../lib/prisma');

exports.getAll = async (req, res) => {
    try {
        const proveedores = await prisma.proveedor.findMany();
        res.json(proveedores);
    } catch (error) {
        console.error('Error fetching customers:', error);
        res.status(500).json({ error: 'Failed to fetch customers' });
    }
}

exports.create = async (req, res) => {
    const {nit, razonsocial} = req.body;
    try {
        const proveedor = await prisma.proveedor.create({
            data: {
                nit,
                razonsocial,
            }
        });
        res.status(201).json(proveedor);
    } catch (error) {
        console.error('Error creating proveedor:', error);
        res.status(500).json({ error: 'Failed to create customer' });
    }
}

exports.update = async (req, res) => {
    const { id } = req.params;
    const { nit, razonsocial, } = req.body;
    try {
        const proveedor = await prisma.proveedor.update({
            where: { id: parseInt(id) },
            data: {
                nit,
                razonsocial,
            }
        });
        res.json(proveedor);
    } catch (error) {
        console.error('Error updating proveedor:', error);
        res.status(500).json({ error: 'Failed to update proveedor' });
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
        console.error('Error deleting proveedor:', error);
        res.status(500).json({ error: 'Failed to delete proveedor' });
    }
}