var express = require("express");
var router = express.Router();
const giftBoxControllers = require("../controllers/gift-box.controller.js");
var router = require("express").Router();

router.get("/gift-box/test", giftBoxControllers.test);
router.post("/gift-box", giftBoxControllers.createGiftBox);
router.get("/gift-box", giftBoxControllers.GetGiftBoxes);
router.put("/gift-box/:giftBoxId", giftBoxControllers.updateGiftBox);
router.delete("/gift-box/:giftBoxId", giftBoxControllers.deleteGiftBox);

module.exports = router;
