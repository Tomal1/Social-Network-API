// Require schema and model from mongoose
const mongoose = require('mongoose');

  /// this is the real one
  const UserSchema = new mongoose.Schema({
    username: { type: String, Unique: true, required: true, trim:true },
    email: {type: String, required: true, Unique: true},
    
    thoughts:[
    {
      type: thoughts,
      ref:"hhjk",

    },
    ],
    friends:[
    {
      type: User,
      ref:"hhjk",
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