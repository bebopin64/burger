var express = require("express");
var override = require("method-override");
var parser = require("body-parser");
var exhb = require("express-handlebars");

var app = express();

var PORT = 1337;

app.use(parser.urlencoded({extended:false}));

//override POST

app.use(override('_method'));
app.engine('handlebars', exhb({defaultLayout:"main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

app.listen(PORT);