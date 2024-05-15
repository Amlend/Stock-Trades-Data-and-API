const express = require("express");
const tradeController = require("../controllers/tradeController");
const router = express.Router();

router.post("/trades", tradeController.postTrade);
router.get("/trades", tradeController.getTrade);

module.exports = router;
