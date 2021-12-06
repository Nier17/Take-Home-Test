const express = require("express");
const app = express();
const cors = require("cors");

//Settings
app.set("port", process.env.PORT || 3001);

app.use(cors());
app.use(express.json());
app.use("", require("./routes/commit.routes"));
app.use("", require("./routes/branch.routes"));

app.listen(app.get("port"), () => {
  console.log('"Server on port', app.get("port"));
});
