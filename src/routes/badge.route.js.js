var express = require("express");
var router = express.Router();
const badgeControllers = require("../controllers/badge.controller.js");
var router = require("express").Router();

router.get("/badge/test", badgeControllers.test);
router.post("/badge", badgeControllers.createBadge);
router.get("/badge", badgeControllers.GetBadges);
router.put("/badge/:badgeId", badgeControllers.updateBadge);
router.delete("/badge/:badgeId", badgeControllers.deleteBadge);
module.exports = router;
