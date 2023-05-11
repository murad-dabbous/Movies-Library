"use strict";
const express = require("express");
const cors = require("cors");
// import json data
const jsonData = require("./Movie Data/data.json");
const app = express();
app.use(cors());
// 500 error handling
const internalServerErrorPage = (err, req, res) => {
  res.status(500).json({
    code: 500,
    message: err.message || err,
  });
};
// First endpoint [Home Page]
const homeHandler = (req, res) => {
  //   console.log(`Testing the first URL`);
  //   res.status(200).json(data);
  jsonData.map((item) => new Add(item.title, item.poster_path, item.overview));
  res.status(200).json(Add.newData);
};
app.get("/", homeHandler);
// second endpoint [Favourite]
const favoritesHandler = (req, res) => {
  console.log(`Welcome to Favorite Page`);
  res.status(200).json({
    statusCode: 200,
    message: "Welcome to Favorite Page",
  });
};
app.get("/favorite", favoritesHandler);
// Errors handling
const notFoundPage = (req, res) => {
  res.status(404).json({
    status: 404,
    responseText: "Page Not Found",
  });
};

// handle errors
app.use("*", notFoundPage);
app.use("*", internalServerErrorPage);
// constructor
function Add(title, poster_path, overview) {
  this.title = title;
  this.poster_path = poster_path;
  this.overview = overview;
  Add.newData.push(this);
}
Add.newData = [];
app.listen(3000, () => console.log("Up and running on port 3000"));
