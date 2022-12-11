//requirements
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const todoRoutes = require("./routes/todo");

//express app
const app = express();

//setup cors
const cors = require("cors");
app.use(cors());
app.options("*", cors());

//middleware
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
    "Access-Control-Allow-Methods 'OPTIONS, DELETE, POST, GET, PATCH, PUT'"
  );
  console.log(req.method, req.path);
  next();
});

//routes
app.use("/api/todo/", todoRoutes);

//connect to db and listening
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port " + process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
