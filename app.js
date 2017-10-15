var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
Boss = require('./api/models/cupModel'),
bodyParser = require('body-parser');

//Mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/bossdb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/cupRoute');
routes(app);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
