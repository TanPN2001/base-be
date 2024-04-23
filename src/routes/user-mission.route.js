var express = require("express");
var router = express.Router();
const userMission = require("../controllers/user-mission.controller.js");
var router = require("express").Router();

router.post("/user-mission", userMission.createUserMission);
router.put("/user-mission/:userMissionId", userMission.updateUserMission);
router.delete("/user-mission/:userMissionId", userMission.deleteUserMission);
router.get("/user-mission", userMission.getUserMission);

module.exports = router;
