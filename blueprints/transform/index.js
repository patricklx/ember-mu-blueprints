const blueprint = require('@ember-data/serializer/blueprints/transform');

blueprint.fileMapTokens = function (options) {
  return {
    __root__(options) {
      return 'app/data';
    },
  };
};

module.exports = blueprint;
