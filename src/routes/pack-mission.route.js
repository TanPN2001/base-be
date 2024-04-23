var express = require("express");
var router = express.Router();
const packMissionControllers = require("../controllers/pack-mission.controller.js");
var router = require("express").Router();

router.get("/pack-mission/test", packMissionControllers.test);
router.post("/pack-mission", packMissionControllers.createPackMission);
router.get("/pack-mission", packMissionControllers.getPackMissions);
router.put("/pack-mission/:packMissionId", packMissionControllers.updatePackMission);
router.delete("/pack-mission/:packMissionId", packMissionControllers.deletePackMission);
module.exports = router;
