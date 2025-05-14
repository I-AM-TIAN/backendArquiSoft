const prisma = require('../lib/prisma');

exports.getAll = async (req, res) => {
  try {
    const shipments = await prisma.Shipment.findMany();
    res.status(200).json(shipments);
  } catch (error) {
    console.error('Error fetching shipments:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

exports.create = async (req, res) => {
  const { Department, City, Address } = req.body;

  try {
    const shipment = await prisma.shipment.create({
        data: {
            Department,
            City,
            Address,
        },
    });
    res.status(201).json(shipment);
  } catch (error) {
    console.error('Error creating shipment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

exports.update = async (req, res) => {
  const { id } = req.params;
  const { departament, city, address } = req.body;

  try {
    const shipment = await prisma.shipment.update({
      where: { id: Number(id) },
      data: {
        departament, city, address
      },
    });
    res.status(200).json(shipment);
  } catch (error) {
    console.error('Error updating shipment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

exports.delete = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.shipment.delete({
      where: { id: Number(id) },
    });
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting shipment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}