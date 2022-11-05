const express = require("express");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

var datas = [];
fs.readFileSync(path.join(__dirname, "data.txt"), "utf8", (err, data) => {
  datas = JSON.parse(data);
});
app.get("/", (req, res) => {
  res.send("success");
});

app.post("register", (req, res) => {
  let player = req.body.player;
  let group = req.body.group;
  datas.push({ player, group });
  fs.writeFileSync(path.join(__dirname, "data.txt"), JSON.stringify(datas));
  res.send("success");
});

app.get("/getdatablabla", (req, res) => {
  res.sendFile(path.join(__dirname, "data.txt"));
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
