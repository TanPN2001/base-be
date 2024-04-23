var express = require("express");
var router = express.Router();
const seasonControllers = require("../controllers/season.controller.js");
var router = require("express").Router();

router.get("/season/test", seasonControllers.test);
router.post("/season", seasonControllers.createSeason);
router.get("/season", seasonControllers.GetSeasons);
router.put("/season/:seasonId", seasonControllers.updateSeason);
router.delete("/season/:seasonId", seasonControllers.deleteSeason);
module.exports = router;
