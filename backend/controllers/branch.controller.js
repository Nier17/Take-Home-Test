const axios = require("axios");

const URL = "https://api.github.com/repos/Nier17/Take-Home-Test/branches";

const branchController = {};

branchController.getBranches = async (req, res) => {
  axios.get(URL).then(function (response) {
    res.send(response.data);
  });
};

branchController.getBranchById = async (req, res) => {
  const newURL = URL + `/${req.params.id}`;
  console.log(newURL);
  axios.get(newURL).then(function (response) {
    res.send(response.data);
  });
};

module.exports = branchController;
