const express = require("express");
const db = require("./config/connection");
const { userThought } = require("./models");
const app = express()
const PORT = 3001;

app.get("/", (req, res) => {
  // Using model in route to find all documents that are instances of that model
  userThought.find({}, (err, result) => {
    if (result) {
      res.status(200).json(result);
    } else {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ message: 'something went wrong' });
    }
  });
});

app.delete("/:id", (req, res) => {
  // Using model in route to find all documents that are instances of that model
  userThought.findOneAndDelete({ id: req.params.id }, (err, result) => {
    if (result) {
      res.status(200).json(result);
      console.log(`Deleted: ${result}`);
    } else {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ message: 'something went wrong' });
    }
  });
});

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });