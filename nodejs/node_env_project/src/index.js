// @flow

console.log('starting file');

const fs = require('fs');

const getAll = () => {
  console.log('getting all notes');
};

// Test types errors with Flow JS
// function square(n) {
//   return n * n; // Error!
// }
// square('2');

module.exports = {
  getAll,
};
