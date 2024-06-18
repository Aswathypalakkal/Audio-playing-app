var express = require("express");
var app = express()
var http = require("http").createServer(app)
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
// Set up the view engine to use HBS
app.set('view engine', 'hbs');
app.get('/',  (req, res) => {
    res.render('script');
});

http.listen(3006, () => {
    console.log("connected to server");
});
