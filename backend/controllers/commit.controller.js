const axios = require("axios");
const { json } = require("express");
// const URL =
// "https://api.github.com/repos/Nier17/Take-Home-Test/branches/feature/requirementsCommits";

const URL = "https://api.github.com/repos/Nier17/Take-Home-Test/commits";

const commitController = {};

commitController.getCommits = async (req, res) => {
  axios.get(URL).then(function (response) {
    res.send(response.data);
  });
  // .cath((e) => console.log(e));
};

module.exports = commitController;
