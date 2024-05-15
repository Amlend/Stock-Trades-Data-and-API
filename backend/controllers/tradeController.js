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
