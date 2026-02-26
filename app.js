var express = require("express");

var bodyParser = require("body-parser");

var app = express();


// Middleware
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index.ejs");
});
app.get("/contact", function (req, res) {
  res.render("contact.ejs");
});



app.listen(3000, function () {
  console.log("Ruchi's app listening on port 3000!");
});