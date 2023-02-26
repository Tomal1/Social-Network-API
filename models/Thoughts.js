// Require schema and model from mongoose
const mongoose = require('mongoose');



const ThoughtSchema = new mongoose.Schema({
    thoughtText: {type: String, required: true, minlength: 1, maxlength: 280 },
    createdAt: {type: Date, default: Date.now },
    username: {type: String, required: true},
    reactions:[
      {
        type: Reactions,
        ref:"hhjk",
      },
     ],
  });

  const Thoughts = mongoose.model("Thoughts", ThoughtSchema);


  /////////
  module.exports = Thoughts;