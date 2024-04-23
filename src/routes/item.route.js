var express = require("express");
var router = express.Router();
const itemControllers = require("../controllers/item.controller.js");
var router = require("express").Router();

router.get("/item/test", itemControllers.test);
router.post("/item", itemControllers.createItem);
router.get("/item", itemControllers.getItems);
router.put("/item/:itemId", itemControllers.updateItem);
router.delete("/item/:itemId", itemControllers.deleteItem);

module.exports = router;
