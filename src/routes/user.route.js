var express = require("express");
var router = express.Router();
const userControllers = require("../controllers/user.controller.js");
// console.log(t);

router.get("/user/test", userControllers.test);
module.exports = router;
