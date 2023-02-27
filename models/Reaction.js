const mongoose = require('mongoose');

const { formatDate, formatTime } = require("../utils/dateFormat");

const ReactionSchema = new mongoose.Schema({
    //how to Use Mongoose's ObjectId data type
    reactionId:{
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
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
        default: Date.now,
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

  module.exports = ReactionSchema;