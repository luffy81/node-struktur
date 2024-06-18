var express      = require('express');
var path         = require('path');
var cookieParser = require('cookie-parser');
var logger       = require('morgan');
var dotenv       = require("dotenv").config();
var cors         = require("cors");

const routes = require('./routes');
const { urlValidation, handleErrors }  = require("./exceptions");

var corsOptions = {
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
    // allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "X-Content-Type-Options", "X-XSS-Protection", "X-Frame-Options", "Strict-Transport-Security", "APIKey"],
    maxAge: 86400,
    credentials: true,
}

var app = express();

app.use(cors(corsOptions));
app.use(logger('dev'));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* GET home page. */
app.get('/', (req, res) => {
    return process.env.NODE_ENV == 'production' ? res.status(204).send("No Content") : res.status(200).send("Ok");
});

// routing
app.use('/', routes);

app.use(urlValidation);
app.use(handleErrors);

module.exports = app;
