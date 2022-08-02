const blueprint = require('ember-source/blueprints/route');
const path = require('path');

blueprint.fileMapTokens = function () {
  return {
    __name__(options) {
      return 'route';
    },
    __path__(options) {
      return `routes/${options.locals.moduleName}`;
    },
    __templatepath__(options) {
      return `routes/${options.locals.moduleName}`;
    },
    __templatename__(options) {
      return 'template';
    },
    __root__(options) {
      if (options.inRepoAddon) {
        return path.join('lib', options.inRepoAddon, 'addon');
      }

      if (options.inDummy) {
        return path.join('tests', 'dummy', 'app');
      }

      if (options.inAddon) {
        return 'addon';
      }

      return 'app/ui';
    },
  };
},

module.exports = blueprint;
