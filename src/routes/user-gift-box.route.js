var express = require("express");
var router = express.Router();
const userGiftBoxControllers = require("../controllers/user-gift-box.controller.js");
var router = require("express").Router();

router.get("/user-gift-box/test", userGiftBoxControllers.test);
router.post("/user-gift-box", userGiftBoxControllers.createUserGiftBox);
router.get("/user-gift-box", userGiftBoxControllers.GetGiftBoxOfUser);
router.put(
  "/user-gift-box/:userGiftBoxId",
  userGiftBoxControllers.updateUserGiftBox
);
router.delete(
  "/user-gift-box/:userGiftBoxId",
  userGiftBoxControllers.deleteUserGiftBox
);
module.exports = router;
