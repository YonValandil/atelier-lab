console.log("starting app");

const notes = require('./file.js');
const _ = require('lodash');
const yargs = require('yargs');

const argv = yargs.argv;
let command = process.argv[2];

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
