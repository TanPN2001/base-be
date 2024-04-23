var express = require("express");
var router = express.Router();
const throwBackControllers = require("../controllers/throw-back.controller.js");
const fileUpload = require("express-fileupload");
var router = require("express").Router();

router.get("/throw-back/test", throwBackControllers.test);
router.post("/throw-back/sync", throwBackControllers.sync);
// router.post("/season", throwBackControllers.createSeason);
router.get("/throw-back", throwBackControllers.getThrowBack);
// router.put("/season/:seasonId", throwBackControllers.updateSeason);
// router.delete("/season/:seasonId", throwBackControllers.deleteSeason);
module.exports = router;
