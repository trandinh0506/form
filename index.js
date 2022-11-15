const express = require("express");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.post("/register", (req, res) => {
  let player = req.body.player;
  fs.appendFileSync(path.join(__dirname, "data.txt"), player + "\n");
  res.send("true");
});

app.get("/script.js", (req, res) => {
  res.sendFile(path.join(__dirname, "script.js"));
});
app.get("/get_data", (req, res) => {
  res.sendFile(path.join(__dirname, "data.txt"));
});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
