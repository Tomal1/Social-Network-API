// Require schema and model from mongoose
const mongoose = require('mongoose');

const ReactionSchema = new mongoose.Schema({
    //how to Use Mongoose's ObjectId data type
    reactionId:{
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    
    reactionBody: { 
        type: String, 
        required: true, 
        maxlength: 280 
    },
    username: {
        type: String, 
        required: true
    },
    createdAt: {
        type: Date, 
        default: Date.now 
        get: (date) => {
            return `${formatDate(date)} ${formatTime(date)}`
        }
    }
  },
  {
    toJSON: {
        getters: true,
    },
    id: false
});

    // this is a model,
    const Reaction = mongoose.model("Reaction", ReactionSchema);

/////////
  module.exports = Reaction;