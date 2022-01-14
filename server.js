var express = require("express");
const path = require("path");
// var cors = require("cors");
var app = express();
var formidable = require("formidable");
const PORT = 3000;
app.use(express.urlencoded({ extended: true }));
// app.use(cors());

app.post("/upload", (req, res) => {
  console.log("LEC ADAS LEC");
  // let form = formidable({});
  // form.multiples = true;
  // form.uploadDir = __dirname + "/static/upload/";
  // form.keepExtensions = true;
  // form.parse(req, function (err, fields, files) {
  //   console.log("files:", files, "fields:", fields);
  //   res.send("amogus");
  // });
  res.send("amogus");
});
app.get("/upload", (req, res) => {
  res.send("sussy");
});

app.listen(PORT, () => {
  console.log("SERVER STARTED ON PORT: " + PORT);
});
