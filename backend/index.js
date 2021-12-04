const express = require("express");
const app = express();
const cors = require("cors");
const { mongoose } = require("./database");

//Settings
app.set("port", process.env.PORT || 3001);

//Middlewares
app.use(cors());
app.use(express.json());
// app.use("/api/commits", require("./routes/commit.routes"));
app.use("", require("./routes/commit.routes"));

app.listen(app.get("port"), () => {
  console.log('"Server on port', app.get("port"));
});
