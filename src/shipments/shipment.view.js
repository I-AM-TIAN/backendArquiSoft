const express = require("express");
const router = express.Router();
const controller = require("./shipment.controller");
const authMiddleware = require("../auth/auth.middleware");

router.get("/", authMiddleware, controller.getAll);
router.post("/", authMiddleware, controller.create);
router.put("/:id", authMiddleware, controller.update);
router.delete("/:id", authMiddleware, controller.delete);

module.exports = router;
