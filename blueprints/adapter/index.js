const blueprint = require('@ember-data/adapter/blueprints/adapter');

blueprint.fileMapTokens = function (options) {
  return {
    __root__(options) {
      return 'app/data';
    },
  };
};

module.exports = blueprint;
