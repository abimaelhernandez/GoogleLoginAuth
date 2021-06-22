const app = require('./config.js');

const port = process.env.PORT || 5000;
app.listen(port, function ()  {
  console.log(`Listening on Port ${port}`);
});
