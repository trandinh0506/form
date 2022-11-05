const express = require("express");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

var datas = [];
fs.readFileSync(path.join(__dirname, "data.json"), "utf8", (err, data) => {
  datas = JSON.parse(data);
});

app.post("/register", (req, res) => {
  let player = req.body.player;
  let group = req.body.group;
  datas.push({ player, group });
  fs.writeFileSync(path.join(__dirname, "data.json"), JSON.stringify(datas));
  res.send("success");
});
app.get("/getdata", (req, res) => {
  res.sendFile(path.join(__dirname, "data.json"));
});
app.get("/", (req, res) => {
  res.send("");
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
