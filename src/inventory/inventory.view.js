const express = require('express');
const router = express.Router();
const controller = require('./inventory.controller');

// Ruta para obtener el stock total
router.get('/stock', controller.getStock);

module.exports = router;
