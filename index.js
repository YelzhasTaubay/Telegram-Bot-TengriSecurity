import express from "express";
// import bot from "./bot.js";

const app = express();

app.get("/", (req, res) => {
  res.send();
});

app.listen(5000, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server OK");
});
