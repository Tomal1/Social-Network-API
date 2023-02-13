// Require schema and model from mongoose
const mongoose = require('mongoose');

// this is the schema (model) for book collection, it defines column of the collection
const userThoughtSchema = new mongoose.Schema({
    // column 1 and data type (required: true -- will not all null values)
    user: { type: String, required: true },
      // column 2 and data type
    thoughts: { type: String, required: true },
    // column 7 and data type (built in method to automatically update with current date)
    lastAccessed: { type: Date, default: Date.now },
  });

  const userThought = mongoose.model('MyBook', userThoughtSchema);


  
  module.exports = userThought;