var mongoose = require('mongoose'),
  Client = mongoose.model('Client');

exports.list_all_clients = function(req, res) {
  Client.find({}, function(err, client) {
    if (err)
      res.send(err);
    res.json(client);
  });
};




exports.create_a_client = function(req, res) {
  var new_client = new Client(req.body);
  new_client.save(function(err, client) {
    if (err)
      res.send(err);
    res.json(client);
  });
};


//login
exports.login_as_client = function(req, res){
  var brugeren =req.body;
  var brugernavninsde = brugeren.brugernavn;
  var passwordinside = brugeren.password;

  //test login system
  if(brugernavninsde=="hello"&&passwordinside=="tsm"){
    res.send("logged in")
  }else{
    res.send("failure")
  }


}



//læs client efter brugernavn
exports.read_a_client = function(req, res) {
  Client.findById(req.params.brugernavn, function(err, client) {
    if (err)
      res.send(err);
    res.json(client);
  });
};



//Bruges ikke nu, hvis tages i brug, husk at ret TASK til client alle steder
/*
exports.update_a_client = function(req, res) {
  Client.findOneAndUpdate({_id: req.params.brugernavn}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};
*/

//Bruges ikke nu, hvis tages i brug, husk at ret TASK til client alle steder
/*
exports.delete_a_task = function(req, res) {


  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};
*/
