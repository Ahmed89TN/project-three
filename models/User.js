const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {
        type: String,
        required: true
        },
    email: {
        type: String,
        required: true,
        unique: true
        },
    password: {
        type: String,
        required: true
    },
    country: {
        type: String, 
        required: true
    },
    age: {
        type: Number, 
        required: true
    },
    faveFood: {
        type: String, 
        required: false
    },
    faveSong: {
        type: String, 
        required: false
    },
    songLink: {
        type: String, 
        required: false
    },
    favePlace: {
        type: String, 
        required: false
    },
    funFact: {
        type: String, 
        required: false
    },
    image: {
        type: String,
        required: false
    },
    followers: [  {
        type: Schema.Types.ObjectId,
        ref: "User"
      }],
    following: [  {
        type: Schema.Types.ObjectId,
        ref: "User"
      }]
});

const User = mongoose.model("User", userSchema);
module.exports= User;