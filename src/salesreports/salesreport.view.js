const express = require('express');
const router = express.Router();
const controller = require('./salesreport.controller');

router.get('/', controller.generateReport);

module.exports = router;