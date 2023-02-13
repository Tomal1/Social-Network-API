// Require schema and model from mongoose
const mongoose = require('mongoose');

// this is the schema (another name for model) for book collection, it defines column of the collection
const userThoughtSchema = new mongoose.Schema({
    // column 1 and data type (required: true -- will not all null values)
    user: { type: String, required: true },
      // column 2 and data type
    thoughts: { type: String, required: true },
    // column 7 and data type (built in method to automatically update with current date)
    lastAccessed: { type: Date, default: Date.now },
  });

  // this is a model,
  const userThought = mongoose.model('MyBook', userThoughtSchema);

  // this is an instance that will create a record/document
  userThought.create(
    {
      user: "ninjaMan123",
      thoughts: "I need to practice my ninja technique"
    },
    {
      user: "superMan321",
      thoughts: "I dont like green"
    },
    
    (err) =>
    //if error, send error message else print the following in terminal
    err ? handleError(err) : console.log('Created new document')

  );

  module.exports = userThought;