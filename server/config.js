const express = require('express');

const app = express();
const path = require('path')
const cors = require('cors')
app.use(
  cors({
    origin: "*"
  })
)

app.use((req, res, next) => {
  // secondary way to eliminate CORS
  // res.header("Access-Control-Allow-Origin", "*");
  res.status(200).json({
    message: 'Simple REST API Is here'
  })
});

module.exports = app;
