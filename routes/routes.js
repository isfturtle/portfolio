var express = require("express");
var bodyParser=require("body-parser");
var logger =require("morgan");


var projects = require("../projectsArray.js");
module.exports=function(app){
	app.get("/", function(req, res){
		//console.log("log");
		//res.send(projects);
		res.render("turtle", {projects: projects});
	});
	app.get("/portfolio", function(req, res){
		//console.log("log");
		//res.send(projects);
		res.render("portfolio", {projects: projects});
	});
}