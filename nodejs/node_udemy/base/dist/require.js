"use strict";

console.log("starting app");

var notes = require('./file.js');

var _ = require('lodash');

var yargs = require('yargs');

var argv = yargs.argv;
var command = process.argv[2];
console.log('command: ', command);
console.log('command yargs: ', argv._[0]);
console.log('yargs: ', argv);

if (command === 'add') {
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.read(argv.title, argv.body);
} else if (command === 'remove') {
  notes.remove(argv.title);
} else {
  console.log('command not recognized');
}