var express = require("express");
var router = express.Router();
const userControllers = require("../controllers/user.controller.js");
var router = require("express").Router();

router.get("/user/test", userControllers.test);
module.exports = router;
