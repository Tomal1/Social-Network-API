// Require schema and model from mongoose
const mongoose = require('mongoose');

const { Thoughts } = require("../models")

  /// this is the real one
  const UserSchema = new mongoose.Schema({
    username: { type: String, Unique: true, required: true, trim:true },
    email: {type: String, required: true, Unique: true},
    
    thoughts:[
    {
      type: Thoughts,
      ref:"thoughts",

    },
    ],
    friends:[
    {
      type: User,
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


//this is the model
  const User = mongoose.model("User", UserSchema);


  module.exports = User;