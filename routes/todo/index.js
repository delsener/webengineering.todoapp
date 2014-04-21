// require todos controller used for the routing
var controller = require('../../controllers/todo_controller');

// provide todo routes
module.exports = function(app) {

  // POST::todos/<id> -> create()
  app.post('/todos', function(req,res) {
	  controller.create(app, req, res);
  });
  
  // PUT::todos/<id> -> update()
  app.put('/todos/:id', function(req,res) {
	  controller.update(app, req, res);
  });
  
  // DELETE::todos/<id> -> delete()
  app.delete('/todos/:id', function(req,res) {
	  controller.delete(app, req, res)
  });
  
  // GET::todos/<id> -> get()
  app.get('/todos/:id', function(req,res) {
    controller.get(app, req, res);
  });

  // GET::todos -> list()
  app.get('/todos', function(req, res) {
	  controller.list(app, req, res);
  }
  );
}