const express = require("express");
const router = express.Router();
const controller = require("./productsaleresport.controller");

router.get("/", controller.getProductSalesReport);

module.exports = router;