// here we are going to write the functionality for to store the user information: 

const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
name: {
type:String,
required: true
},
email: {
type: String,
required: true

}

})