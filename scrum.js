var express = require("express");
var log4js = require("log4js");

var app = express();
var logger = log4js.getLogger();

app.set("view engine","jade");

app.get("/proyect",function(req,res){
    res.render("proyects");
    
})

app.get("/productBacklog",function(req,res){
    res.render("prodBacklog");
    
})

app.listen("8080");