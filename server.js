const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db             = require('./config/db')
const app            = express();

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));


MongoClient.connect(db.url, (err, db) => {
  if (err) return console.log(err)
  var dbo = db.db("shubham");
  console.log("Connection created");
  require('./app/routes')(app, dbo);
  app.listen(port, () => {
    console.log('We are live on ' + port);
  }); 
                
})