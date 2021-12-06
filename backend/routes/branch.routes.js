const express = require("express");
const router = express.Router();

const branchController = require("../controllers/branch.controller");

router.get("/getBranches", branchController.getBranches);

module.exports = router;
