var express = require("express");
var bodyParser=require("body-parser");
var logger =require("morgan");

var app = express();


var PORT = process.env.PORT || 3000;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

require("./routes/routes.js")(app);

app.listen(PORT, function(){
	console.log("App is running on port "+PORT);
});