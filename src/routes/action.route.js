var express = require("express");
var router = express.Router();
const actionControllers = require("../controllers/action.controller.js");
const { checkAdminAuthorizationToken } = require("../middlewares/authorization.js");
var router = require("express").Router();

router.get("/actin/test", actionControllers.test);
router.post("/action",checkAdminAuthorizationToken, actionControllers.cmsCreateAction);
router.get("/action",checkAdminAuthorizationToken, actionControllers.cmsGetActions);
router.put("/action/:actionId",checkAdminAuthorizationToken, actionControllers.cmsUpdateAction);
router.delete("/action/:actionId",checkAdminAuthorizationToken, actionControllers.cmsDeleteAction);
module.exports = router;
