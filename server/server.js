var express = require('express'),
    morgan  = require('morgan');


var app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname +'/../client'));
module.exports = app;


app.listen(8000);
console.log("Listening on http://127.0.0.1:8000");
