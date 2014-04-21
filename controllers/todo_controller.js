// controller dealing with Todo objects (app.models.todo)

// create todo object
exports.create = function(app, req, res) {
	var todo = app.models.todo.create(req.body);
	console.log("item created");
	res.json( todo );
};

// update given todo object
exports.update = function(app, req, res) {
	res.json( app.models.todo.update(req.body) );
};

// delete todo object by id
exports.delete = function(app, req, res) {
	res.json( app.models.todo.delete(req.params.id) );
};

// get todo object by id
exports.get = function(app, req, res) {
  res.json( app.models.todo.get(req.params.id) );
};

// list all
exports.list = function(app, req, res) {
  var all = app.models.todo.list();
  console.log("number of items returned: " + all.length)
  res.json( all );
};

