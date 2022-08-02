const blueprint = require('ember-source/blueprints/initializer');

blueprint.fileMapTokens = function (options) {
  return {
    __root__() {
      return 'app/init';
    },
    __path__() {
      return 'initializers';
    },
  };
};

module.exports = blueprint;
