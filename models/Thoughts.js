// Require schema and model from mongoose
const mongoose = require('mongoose');

const { Reaction } = require("./Reaction");

const ThoughtSchema = new mongoose.Schema({
    thoughtText: {type: String, required: true, minlength: 1, maxlength: 280 },
    createdAt: {type: Date, default: Date.now },
    username: {type: String, required: true},
    reactions:[
      {
        type: Reaction,
        ref:"Reactions",
      },
     ],
  });

  const Thoughts = mongoose.model("Thoughts", ThoughtSchema);


  /////////
  module.exports = Thoughts;