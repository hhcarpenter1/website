var express = require("express"),
//smtpTransport = require('nodemailer-smtp-transport'),
app = express(),
bodyParser = require("body-parser");

app.get("/", function(req, res){
   res.render("landing"); 
});


app.get("/experience", function(req, res){
    res.render("partials/experience");
});

app.get("/contact", function(req, res){
    res.render("partials/contact");
});

app.get("/portfolio", function(req, res){
    res.render("partials/portfolio");
});


app.get("/oprf", function(req, res){
   res.render("partials/oprf"); 
});

app.get("/knox", function(req, res){
   res.render("partials/knox"); 
});

app.post("/index.php", function(req, res){
   res.render("partials/index"); 
});





app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));





app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The Carpenter Server has started."); 
});


