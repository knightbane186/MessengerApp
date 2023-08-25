// below will use to build a web application framework
const express = require("express");
// below is used to access the middle body?
const bodyParser = require("body-parser");
// mongoose is to access the middleware?
const mongoose = require("mongoose");
// below is used to access the authentication part of the app
const passport = require("passport");
// below is for user name password authentication of the app
const localStrategy = require("passport-local").Strategy;

// we are initializinfg here

const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());

// now we configure the body parser and otehr necessary middleware

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
const jwt = require("jsonwebtoken");

mongoose
  .connect(
    "mongodb+srv://<username>:<Password>@cluster0.xxwntq7.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to Mongo Db");
  })
  .catch((err) => {
    console.log("Error connecting to mongo Db", err);
  });

app.listen(port, () => {
  console.log("Server running on port 8000");
});

const User = require("./models/user");
const Message = require("./models/message");

//endpoint for registration of the user

app.post("/register", (req, res) => {
  const { name, email, password, image } = req.body;



  //check if the email in of that particular user
  app.post("/login",(req,res)=> {
    const {email,password} = req.body;
  })

  //check if the email and password are provided 
  if (!email || !password) {
    return res.status(404).json({message:"Email and the password are required!"})
  }

  //check for the user in the database:
  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    //Compare the provided passwords with the password in thedatabase

    if (user.password !== password) {
      return res.status(404).json({message:"INvalid Password!"})
    }
 const token = createToken(user._id);
 res.status(200).json({token})
}).catch((error) =>{
  console.log("error in finding the user", error);
  res.status(500).json({message:"Internal server Error!"})
})
  

  // create a new user object
  const newUser = new User({ name, email, password, image });

  // Save the user to the database
  newUser
    .save()
    .then(() => {
      res.status(200).json({ message: "User registered successfully" });
    })
    .catch((err) => {
      console.log("Error registering user", err);
      res.status(500).json({ message: "Error registering the user!" });
    });
});
