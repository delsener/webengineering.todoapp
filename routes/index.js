// provide route to the todo routes index
module.exports = function(app) {
  require('./todo')(app);
}

