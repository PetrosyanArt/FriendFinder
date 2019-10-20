//requires
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

var PORT = process.env.PORT || 8080;


//middleware use
app.use(cors()); //saves us from having to do access-control-allow-origin
app.use(bodyParser.json());

//importing routes
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app, path);


app.listen(PORT, ()=> {
    console.log(`Connected on port: ${PORT}`);
});