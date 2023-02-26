// Require schema and model from mongoose
const mongoose = require('mongoose');

const ReactionSchema = new mongoose.Schema({
    //how to Use Mongoose's ObjectId data type
    reactionId: ObjectId,
    //
    reactionBody: { type: String, required: true, maxlength: 280 },
    username: {type: String, required: true},
    createdAt: {type: Date, default: Date.now }
  });

    // this is a model,
    const Reaction = mongoose.model("Reaction", Reaction);

/////////
  module.exports = Reaction;