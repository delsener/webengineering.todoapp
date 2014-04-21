// provide models under a specific name
module.exports = function(app) {
  app.models = {}
  app.models.todo = require('./todo.js');
};
