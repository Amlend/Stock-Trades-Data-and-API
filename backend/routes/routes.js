const express = require("express");
const tradeController = require("../controllers/tradeController");
const router = express.Router();

router.post("/trades", tradeController.postTrade);
router.get("/trades/:id", tradeController.getTradeById);
router.get("/trades", tradeController.getTrade);
router.delete("/trades/:id", tradeController.deleteTrade);
router.put("/trades/:id", tradeController.putTrade);
router.patch("/trades/:id", tradeController.patchTrade);

module.exports = router;
