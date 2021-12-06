const express = require("express");
const router = express.Router();

const branchController = require("../controllers/branch.controller");

router.get("/getBranches", branchController.getBranches);
router.get("/getBranches/:id", branchController.getBranchById);

module.exports = router;
