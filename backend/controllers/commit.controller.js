const axios = require("axios");
const { json } = require("express");
const URL = "https://api.github.com/repos/Nier17/FinanceProject/commits";

const commitController = {};

commitController.getCommits = async (req, res) => {
  axios.get(URL).then(function (response) {
    res.send(response.data);
  });
};

module.exports = commitController;
