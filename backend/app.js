const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const path = require("path");
const sequelize = require("./util/database");
const Trade = require("./models/trade");
const tradeRoutes = require("./routes/routes");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Routes
app.use(tradeRoutes);

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
