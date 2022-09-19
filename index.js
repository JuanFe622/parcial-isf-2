const express = require("express");
const mongoose = require("mongoose");
const app = express();
const costumerRoute = require('./src/routes/costumer.routes')

require("dotenv").config();
const port = 5000 || process.env.PORT;

app.listen(port, () => {
    console.log("Running in the port ", port);
});
  
app.get('/', (req,res)=>res.send('Parcial I - Ingenieria de Software 2'));

//middlewares

app.use(express.json());
app.use('/api', costumerRoute);

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => {
    console.log("Successful connection with MongoDB");
  })
  .catch((err) => {
    console.log(err);
});