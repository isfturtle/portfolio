var express = require("express");
var bodyParser=require("body-parser");
var logger =require("morgan");


var projects = require("../projectsArray.js");
module.exports=function(app){
	app.get("/", function(req, res){
		//console.log("log");
		//res.send(projects);
		res.render("about", {});
	});
	app.get("/portfolio", function(req, res){
		//console.log("log");
		//res.send(projects);
		res.render("portfolio", {projects: projects});
	});
	app.get("/resume", function(req, res){
		res.render("resume", {});
	})
}