var express = require("express");
var router = express.Router();
const transactionControllers = require("../controllers/transaction.controller.js");
var router = require("express").Router();

router.get("/transaction/test", transactionControllers.test);
router.post("/transaction", transactionControllers.createTransaction);
router.get("/transaction", transactionControllers.getTransactions);
router.put("/transaction/:transactionId", transactionControllers.updateTransaction);
router.delete("/transaction/:transactionId", transactionControllers.deleteTransaction);

module.exports = router;
