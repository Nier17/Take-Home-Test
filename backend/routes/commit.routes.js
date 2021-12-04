const express = require("express");
const router = express.Router();

const commitController = require("../controllers/commit.controller");
const { request } = require("express");

router.get("/getCommits", commitController.getCommits);

module.exports = router;
