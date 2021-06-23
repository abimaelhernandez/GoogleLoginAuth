const express = require('express');

const app = express();
const path = require('path')

// app.use(express.static(__dirname + "/../client/dist"));
app.use((req, res, next) => {
  res.status(200).json({
    message: 'Simple REST API res'
  })
});

module.exports = app;
