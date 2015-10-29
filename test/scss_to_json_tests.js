'use strict';

var grunt = require('grunt');
var assert = require('assert');
var expectedTest = require('./expected/test.json');
var expectedScoped = require('./expected/scoped.json');
var expectedHasDependents = require('./expected/has-dependents.json');
var expectedScopedHasDependents = require('./expected/scoped-has-dependents.json');

function generateErrorMessage(filename) {
  return filename + ' does not match the expected result.';
}

grunt.util.spawn({
  cmd: "grunt",
  args: ["test"]
}, function(error, result) {
  assert.strictEqual(result.code, 0);

  var generatedTest = require('./output/test.json');
  var generatedScoped = require('./output/scoped.json');
  var generatedHasDependents = require('./output/has-dependents.json');
  var generatedScopedHasDependents = require('./output/scoped-has-dependents.json');

  assert.deepEqual(generatedTest, expectedTest, generateErrorMessage('test.json'));
  assert.deepEqual(generatedScoped, expectedScoped, generateErrorMessage('scoped.json'));
  assert.deepEqual(generatedHasDependents, expectedHasDependents, generateErrorMessage('has-dependents.json'));
  assert.deepEqual(generatedScopedHasDependents, expectedScopedHasDependents, generateErrorMessage('scoped-has-dependents.json'));
});
