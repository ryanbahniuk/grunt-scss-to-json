/*
 * grunt-scss-to-json
 * https://github.com/ryanbahniuk/grunt-scss-to-json
 *
 * Copyright (c) 2015 Ryan Bahniuk
 * Licensed under the MIT license.
 */

'use strict';

var scssToJson = require('scss-to-json');

function allFilesExist(grunt, mainPath, options) {
  var allPaths = [mainPath];

  if (options && options.dependencies) {
    var dependencyPaths = options.dependencies.map(function(dependency) {
      return dependency.path;
    });

    allPaths = allPaths.concat(dependencyPaths);
  }

  return allPaths.every(function(path) {
    if (grunt.file.exists(path)) {
      return true;
    } else {
      grunt.fail.warn('File "' + path + '" not found.');
      return false;
    }
  });
}

module.exports = function(grunt) {
  grunt.registerMultiTask('scss_to_json', 'A grunt plugin that uses scss-to-json and writes the JSON to the file system.', function() {
    if (this.filesSrc.length > 1) {
      grunt.fail.warn('Src must match only one file.');
    }

    var src = this.filesSrc[0];
    var dest = this.files[0].dest;
    var options = this.options();

    if (allFilesExist(grunt, src, options)) {
      var jsonObject = scssToJson(src, options);
      grunt.file.write(dest, JSON.stringify(jsonObject));
      grunt.log.writeln('File "' + dest + '" created.');
    }
  });
};
