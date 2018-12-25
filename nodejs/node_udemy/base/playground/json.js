//How to use JSON
//
//var obj = {
//	name: 'YoYo'
//};
//var stringObj = JSON.stringify(obj);
//console.log(typeof stringObj);
//console.log(stringObj);
//
//console.log("Recuperation en obj");
//
//var personString = '{"name": "YoYo", "age": 42}';
//
//var person = JSON.parse(personString);
//console.log(typeof person);
//console.log(person);

//DOING

var fs = require('fs');

var originalNote = {
	title: 'some title',
	body: 'some body'
};

//ecriture donnees
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('note.json', originalNoteString);

//lecture donnees
var noteString = fs.readFileSync('note.json');
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
