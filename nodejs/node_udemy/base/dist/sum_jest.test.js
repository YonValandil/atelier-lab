"use strict";

var sum = require('./sum_jest');

test('adds 1 + 2 to equal 3', function () {
  expect(sum(1, 2)).toBe(3);
});