/* jshint node: true */
'use strict';

var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'merge-es6-vendor',
  treeForVendor: function (tree) {
    var npmDeps = new Funnel( 'node_modules/ember-inflector/packages/ember-inflector/lib', {
      destDir: 'vendor/ember-inflector'
    });

    return mergeTrees([tree, npmDeps]);

  }
};
