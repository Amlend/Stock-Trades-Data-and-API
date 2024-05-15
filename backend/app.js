const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const path = require("path");
const sequelize = require("./util/database");
const Trade = require("./models/trade");

const app = express();
const port = process.env.PORT || 3000;

sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is Running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
