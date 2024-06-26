const express = require("express");
const Trade = require("../models/trade");

exports.postTrade = async (req, res, next) => {
  const data = req.body;
  console.log("payload=>", data);

  try {
    const newTrade = await Trade.create(data);
    res.status(201).json(newTrade);
  } catch (error) {
    console.error("Error creating trade:", error.message);
  }
};

exports.getTrade = async (req, res, next) => {
  const { type, user_id } = req.query; // Destructure query parameters

  let whereClause = {}; // Initialize empty object for WHERE clause

  if (type) {
    whereClause.type = type;
  }

  if (user_id) {
    whereClause.user_id = parseInt(user_id);
  }

  try {
    const trades = await Trade.findAll({ where: whereClause }); // Find all trades matching conditions
    res.status(200).json(trades);
  } catch (error) {
    console.error("Error fetching trades:", error.message);
    res.status(500).json({ message: "Error fetching trades" });
  }
};

exports.getTradeById = async (req, res, next) => {
  const id = parseInt(req.params.id);

  try {
    const trade = await Trade.findByPk(id); // Find trade by primary key
    if (trade) {
      res.status(200).json(trade);
    } else {
      res.status(404).send("ID not found");
    }
  } catch (error) {
    console.error("Error fetching trade:", error.message);
    res.status(500).json({ message: "Error fetching trade" });
  }
};

exports.deleteTrade = (req, res, next) => {
  res.status(405).send("Method Not Allowed");
};

exports.putTrade = (req, res, next) => {
  res.status(405).send("Method Not Allowed");
};

exports.patchTrade = (req, res, next) => {
  res.status(405).send("Method Not Allowed");
};
