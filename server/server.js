const express = require('express');
const bodyParser = require("body-parser");
//const cors = require("cors");

const app = express();

const db = require("./models");
db.sequelize.sync();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Server is ready." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server ready on port ${PORT}.`);
});