const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Trade = sequelize.define(
  "Trade",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    symbol: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    shares: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    price: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
    timestamp: {
      type: Sequelize.BIGINT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Trade;
