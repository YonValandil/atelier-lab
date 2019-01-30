// @flow

// How to use JSON
//
// var obj = {
// name: 'YoYo'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);
//
// console.log("Recuperation en obj");
//
// var personString = '{"name": "YoYo", "age": 42}';
//
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

const originalNote = {
  title: 'some title',
  body: 'some body',
};

// ecriture donnees
const originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('note.json', originalNoteString);

// lecture donnees
const noteString = fs.readFileSync('note.json');
const note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
console.log('test babel compil 2 !');
