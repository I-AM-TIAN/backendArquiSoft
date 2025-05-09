// Este archivo puede ser útil si se desea definir una clase local para validaciones o documentación.
// Con Prisma, los modelos se gestionan desde schema.prisma.
class Product {
  constructor(id, name, price, stock) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}

module.exports = Product;