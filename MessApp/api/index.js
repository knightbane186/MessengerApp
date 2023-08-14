// below will use to build a web application framework
const express = require("express");
// below is used to access the middle body?
const bodyParser = require("body-parser");
// mongoose is to access the middleware?
const mongoose = require("mongoose");
// below is used to access the authentication part of the app
const passport = require("passport");
// below is for user name password authentication of the app
const localStrategy = require("passport-local").Strategy

// we are initializinfg here 

const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());

// now we configure the body parser and otehr necessary middleware 

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(passport.initialize());
const jwt = require("jsonwebtoken")

mongoose.connect(
    "mongodb+srv://<username>:<Password>@cluster0.xxwntq7.mongodb.net/",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=> {
    console.log("Connected to Mongo Db");
    }).catch((err) => {
        console.log("Error connecting to mongo Db", err)
    });

    app.listen(port,() => {
console.log("Server running on port 8000");
    });
