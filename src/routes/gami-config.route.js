var express = require("express");
var router = express.Router();
const gamiConfigControllers = require("../controllers/gami-config.controller.js");
var router = require("express").Router();

router.get("/gami-config/test", gamiConfigControllers.test);
router.post("/gami-config", gamiConfigControllers.createGamiConfigs);
router.get("/gami-config", gamiConfigControllers.getGamiConfigs);
router.put(
  "/gami-config/:gamiConfigId",
  gamiConfigControllers.updateGamiConfigs
);
router.delete(
  "/gami-config/:gamiConfigId",
  gamiConfigControllers.deleteGamiConfigs
);
module.exports = router;
