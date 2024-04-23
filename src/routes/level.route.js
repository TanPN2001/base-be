var express = require("express");
var router = express.Router();
const levelControllers = require("../controllers/level.controller.js");
var router = require("express").Router();

router.get("/level/test", levelControllers.test);
router.post("/level", levelControllers.createLevel);
router.post("/level/bulk-create", levelControllers.genLevel);
router.get("/level", levelControllers.getLevels);
router.put("/level/:levelId", levelControllers.updateLevel);
router.delete("/level/:levelId", levelControllers.deleteLevel);
module.exports = router;
