// Require schema and model from mongoose
const mongoose = require('mongoose');

//dont use {}
const  ReactionSchema = require("./Reaction");

const { formatDate, formatTime } = require("../utils/dateFormat");

const ThoughtSchema = new mongoose.Schema({
    thoughtText: {
        type: String, 
        required: true, 
        minlength: 1, 
        maxlength: 280 
    },
    createdAt: {
        type: Date, 
        default: Date.now,
        get: (date) => {
            return `${formatDate(date)} ${formatTime(date)}`;
        },
    },
    username: {
        type: String, 
        required: true
    },
    reactions:[ReactionSchema],
  },
  {
    toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false
    }
  );

  ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length
});
//used to referance the ThoughtSchema via "Thoughts" in User.js
  const Thoughts = mongoose.model("Thoughts", ThoughtSchema);


  /////////
  module.exports = Thoughts;