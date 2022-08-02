const blueprint = require('@ember-data/model/blueprints/model');

blueprint.fileMapTokens = function (options) {
  return {
    __root__(options) {
      return 'app/data';
    },
  };
};

module.exports = blueprint;
