var express = require("express");
var router = express.Router();
const appController = require("../controllers/app.controller");
const userAppController = require("../controllers/app.controller/user.app.controller");
const missionAppController = require("../controllers/app.controller/mission.app.controller");
const itemAppController = require("../controllers/app.controller/item.app.controller");
const badgeAppController = require("../controllers/app.controller/badge.app.controller");
const seasonAppController = require("../controllers/app.controller/season.app.controller");
const rankAppController = require("../controllers/app.controller/rank.app.controller");
const umeeAppController = require("../controllers/app.controller/umee.app.controller");
const throwBackAppController = require("../controllers/app.controller/throw-back.app.controller");

var router = require("express").Router();

router.get("/app/test", appController.test);
router.get("/app/user", userAppController.getUserInfo);

// mission
router.get("/app/mission/:missionId", missionAppController.getDetailMission);
router.get("/app/mission", missionAppController.getMissions);
router.get("/app/user-mission", missionAppController.getMissionOfUser);
router.post(
  "/app/complete-mission",
  missionAppController.completeMissionOfUser
);

// item
router.get("/app/item", itemAppController.getAllItem);
router.get("/app/item/:itemId", itemAppController.getDetailItem);
router.get("/app/user-item", itemAppController.getItemOfUser);
router.post("/app/item/buy", itemAppController.buyItem);
router.post("/app/item/equip", itemAppController.equipItem);

// badge
router.get("/app/badge", badgeAppController.getAllBadge);

// season
router.get("/app/season", seasonAppController.getSeason);

// rank
router.get("/app/rank-meetik", rankAppController.meetikRank);

// umee
router.put("/app/umee/sleep", umeeAppController.sleep);
router.put("/app/umee/feed", umeeAppController.feed);

// throw-back
router.get("/app/throw-back", throwBackAppController.getThrowBack);
module.exports = router;
