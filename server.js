var express = require("express");
const path = require("path");
var app = express();
var formidable = require("formidable");
const PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.listen(PORT, () => {
  console.log("SERVER STARTED ON PORT: " + PORT);
});

app.post("/upload", (req, res) => {
  let form = formidable({});
  form.multiples = true;
  form.uploadDir = __dirname + "/static/upload/";
  form.keepExtensions = true;
  form.parse(req, function (err, fields, files) {
    console.log("form parse");
  });
  res("amogus");
});
