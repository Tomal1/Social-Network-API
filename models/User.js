// Require schema and model from mongoose
const mongoose = require('mongoose');
const { model } = require("mongoose")
//const { Thoughts, User } = require("../models")

  /// this is the real one
  const UserSchema = new mongoose.Schema({
    username: { 
      type: String, 
      Unique: true, 
      required: true, 
      trim:true 
    },
    email: {
      type: String, 
      required: true, 
      Unique: true
    },
    thoughts:[
      {
        
        type: mongoose.Schema.Types.ObjectId,
        ref:"Thoughts",
      },
    ],
    friends:[
      {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
      },
   ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  });


  UserSchema.virtual("friendCount").get(function () {
    return this.friends.length
});

//this is the model
  const User = model("User", UserSchema);


  module.exports = User;