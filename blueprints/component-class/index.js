const blueprint = require('ember-source/blueprints/component-class');

blueprint.fileMapTokens = function (options) {
  return {
    __root__() {
      return 'src/ui';
    },
    __path__() {
      return 'components';
    },
    __templatepath__() {
      return 'components';
    },
    __templatename__() {
      return 'template';
    },
  };
};

module.exports = blueprint;
