const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("TODO: show todo list to user")
  //TODO: show todo list to user
});

app.post("/todo", (req, res) => {
  console.log("TODO: save a todo")
  //TODO: save a todo
});

module.exports = app;
