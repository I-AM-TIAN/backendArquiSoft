const prisma = require('../lib/prisma');

exports.getAll = async (req, res) => {
  const products = await prisma.product.findMany();
  res.json(products);
};

exports.create = async (req, res) => {
  const { name, price, stock, categoryId, proveedorId } = req.body;

  try {
    const product = await prisma.product.create({
      data: {
        name,
        price: parseFloat(price),
        stock: parseInt(stock),
        category: {
          connect: { id: parseInt(categoryId) } // Relación con categoría existente
        },
        proveedor: {
          connect: { id: parseInt(proveedorId) }
        }
      }
    });
    res.status(201).json(product);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Failed to create product' });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { name, price, stock } = req.body;
  try {
    const updatedProduct = await prisma.product.update({
      where: { id: parseInt(id) },
      data: { name, price: parseFloat(price), stock: parseInt(stock) }
    });
    res.json(updatedProduct);
  } catch (error) {
    res.status(404).json({ error: 'Product not found' });
  }
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.product.delete({
      where: { id: parseInt(id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: 'Product not found' });
  }
};