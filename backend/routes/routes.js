const express = require("express");
const tradeController = require("../controllers/tradeController");
const router = express.Router();

router.post("/trade", tradeController.postTrade);

module.exports = router;
