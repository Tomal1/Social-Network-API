const express = require("express");
const db = require('./config/connection');

const app = express()

const PORT = 3001;

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });