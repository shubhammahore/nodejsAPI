module.exports = function(app, db) {
    const collection = 
    app.post('/notes', (req, res) => {
      //const note = { text: req.body.body, title: req.body.title };
     var myobj = { name: "deviseapp", address: "delhi" };
      db.collection('test').find({}).toArray((err, result) => {
        if (err) { 
          res.send({ 'error': 'An error has occurred' }); 
        } else {
            console.log(" found success");
          res.send(result);
          
          
        }
      });
    });
  };