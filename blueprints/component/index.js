const blueprint = require('ember-source/blueprints/component');

blueprint.fileMapTokens = function(options) {
  return {
    __root__() {
      return 'app/ui';
    },
    __name__() {
      return options.blueprintName;
    },
    __path__() {
      return `components/${options.dasherizedModuleName}`;
    },
    __templatepath__() {
      return `components/${options.dasherizedModuleName}`;
    },
    __templatename__() {
      return 'template';
    },
  };
};

module.exports = blueprint;
