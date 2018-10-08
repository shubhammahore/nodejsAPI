module.exports = function(app, db) {
    const collection = 
    app.post('/notes', (req, res) => {
      //const note = { text: req.body.body, title: req.body.title };
     var myobj = { name: "deviseapp", address: "delhi" };
      db.collection('notes').insert(myobj, (err, result) => {
        if (err) { 
          res.send({ 'error': 'An error has occurred' }); 
        } else {
            console.log(" 1 Document inserted");
          res.send(result.ops[0]);
          db.close();
          
        }
      });
    });
  };