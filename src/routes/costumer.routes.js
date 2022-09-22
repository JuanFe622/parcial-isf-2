const express = require("express");
const costumer_model = require("../models/costumer.model");
const costumer_routes = express.Router()


costumer_routes.post('/costumer', (req, res) => {
    new_costumer = costumer_model(req.body);
    new_costumer
      .save()
      .then((data) => {
        res.json({message:data});
      })
      .catch((err) => {
        res.json({message:err});
      });
});

costumer_routes.get("/costumers", (req, res) => {
    costumer_model
    .find()
    .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
});

costumer_routes.get('/costumer/:costumerId', (req, res)=>{
    const { costumerId } = req.params;
    costumer_model
        .findById(costumerId)
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
});

costumer_routes.get("costumer/reference", (req, res)=>{
  const { reference } = req.params
  costumer_model.find({reference: refValue}).toArray((err, costumers) => {
    res.status(200).json(costumers);
  })
});



costumer_routes.put("/costumer/:costumerId", (req, res) => {
    const { costumerId } = req.params;
    const { dueDate, docNumber, status, line, vendor, totalAmount } = req.body;
    costumer_model
      .updateOne({ _id: costumerId }, { $set: { dueDate, docNumber, status, line, vendor, totalAmount } })
      .then((data) => res.json(data))
      .catch((err) => res.json({ message: err }));
});

costumer_routes.delete("/costumer/:costumerId", (req, res) => {
    const { costumerId } = req.params;
    costumer_model
          .deleteOne({ _id: costumerId })
          .then((data) => res.json(data))
          .catch((err) => res.json({message: err}));
});

module.exports = costumer_routes