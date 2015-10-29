/*
 * grunt-scss-to-json
 * https://github.com/ryanbahniuk/grunt-scss-to-json
 *
 * Copyright (c) 2015 Ryan Bahniuk
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

module.exports = function(grunt) {
  grunt.initConfig({
    clean: {
      test: ['test/output/*.json']
    },

    scss_to_json: {
      test: {
        src: 'test/scss/test.scss',
        dest: 'test/output/test.json'
      },

      scoped: {
        src: 'test/scss/scoped.scss',
        dest: 'test/output/scoped.json',
        options: {
          scope: '%scoped'
        }
      },

      dependents: {
        src: 'test/scss/has-dependents.scss',
        dest: 'test/output/has-dependents.json',
        options: {
          dependencies: [
            {
              path: 'test/scss/dependency.scss'
            }
          ]
        }
      },

      scoped_dependents: {
        src: 'test/scss/scoped-has-dependents.scss',
        dest: 'test/output/scoped-has-dependents.json',
        options: {
          scope: '%scoped',
          dependencies: [
            {
              path: 'test/scss/scoped-dependency.scss',
              scope: '%scoped'
            }
          ]
        }
      }
    }
  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('test', ['clean', 'scss_to_json']);
};
