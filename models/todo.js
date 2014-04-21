// model providing functions to access model objects

// create todo object
exports.create = function (data) {
	console.log("creating ....");
	return TodoDAO.create(data);
	
};

//update given todo object
exports.update = function (data) {
	return TodoDAO.update(data);
};

//delete todo object by id
exports.delete = function (id) {
	return TodoDAO.delete(id);
}

//get todo object by id
exports.get = function (id) {
	return TodoDAO.get(id);
};

//list all
exports.list = function () {
	return TodoDAO.list();
};

// todo items aren't stored in db, but directly in memory managed by this
// "Todo DataAccessObject"
var TodoDAO = {
  todos: [
    {
      id: 0,
      titel: 'title',
      description: 'description',
      estimation: 8, // range: 1,2,3,5,8
      assignee: 'unassigned',
      state: 1 // 1 = todo, 2 = in progress, 3 = done
    }
  ],

  clone: function (data) {
    return JSON.parse(JSON.stringify(data));
  },

  merge: function(object, attr) {
    for (var attrname in attr) {
      object[attrname] = attr[attrname];
    }
    return object;
  },
  
  indexOf: function(id) {
	  for (var i = 0; i < this.todos.length; i++) {
	      if (this.todos[i].id == id) {
	        return i;
	      }
	  }
	  return -1;
  },

  create: function (data) {
	console.log("creating item: " + data);
    var data = this.clone(data);
    data.id = this.todos.length;
    this.todos.push(data);
    return data;
  },

  update: function(data) {
    var index = TodoDAO.indexOf(data['id']);
    if (index != -1) {
    	this.merge(this.todos[index], data);
    	return this.todos[index];
    }
    return void 0;
  },

  get: function (id) {
	  var index = TodoDAO.indexOf(id);
	  if (index != -1) {
		  return this.todos[index];
	  }
	  return void 0;
  },

  delete: function (id) {
	  var index = TodoDAO.indexOf(id);
	  console.log("deleting..." + index);
	  if (index != -1) {
		  var todo = this.get(id);
		  this.todos.splice(index, 1);
		  return todo;
	  }
	  return void 0;
  },

  list: function () {
    return this.todos;
  }
};

