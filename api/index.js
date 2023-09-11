require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const http = require("http");

const app = express();
const server = http.createServer(app);
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/peopleDB');

const peopleSchema = {
  id: String,
  name: String,
};

app.get("/", (req, res) => {
  res.send("server is working!!!");
});

app.route("/api").get((req, res) => {});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
