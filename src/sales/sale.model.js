class Sale {
  constructor(id, total, createdAt, productId, paymentMethodId, customerId,quantity) {
    this.id = id;
    this.total = total;
    this.createdAt = createdAt;
    this.productId = productId;
    this.paymentMethodId = paymentMethodId;
    this.customerId = customerId;
    this.quantity = quantity;
  }
}

module.exports = Sale;