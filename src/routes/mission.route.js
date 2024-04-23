var express = require("express");
var router = express.Router();
const missionControllers = require("../controllers/mission.controller.js");
var router = require("express").Router();

router.get("/mission/test", missionControllers.test);
router.post("/mission", missionControllers.createMission);
router.get("/mission", missionControllers.GetMissions);
router.put("/mission/:missionId", missionControllers.updateMission);
router.delete("/mission/:missionId", missionControllers.deleteMission);
module.exports = router;
