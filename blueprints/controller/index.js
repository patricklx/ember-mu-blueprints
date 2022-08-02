const blueprint = require('ember-source/blueprints/controller');

blueprint.fileMapTokens = function (options) {
  return {
    __root__() {
      return 'app/ui';
    },
    __path__() {
      return 'routes';
    },
  };
};

module.exports = blueprint;
