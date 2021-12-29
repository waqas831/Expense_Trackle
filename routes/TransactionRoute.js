const express = require("express");
const route = express.Router();
const TransactionModel = require("../models/Transaction");

route.get("/",async (req, res) => {
  try {
    const data = await TransactionModel.find({});
    if (data) {
      res.status(200).json({ msg: "Success", data: data, success: true });
    } else {
      res.status(404).json({ msg: "Failed", success: false });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

route.post("/", async (req, res) => {
  try {
    const { name, amount } = req.body;
    const data = await new TransactionModel({ name, amount }).save();
    if (data) {
      res.json({ msg: "data added successfully" });
    } else {
      res.json({ msg: "data not added" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

route.delete("/:id",async (req, res) => {
  try {
    const id = req.params.id;
    const data =await TransactionModel.findOneAndDelete({ _id: id });
    if (data) {
      res.json({ msg: "data deleted successfully" });
    } else {
      res.json({ msg: "data not deleted" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = route;
