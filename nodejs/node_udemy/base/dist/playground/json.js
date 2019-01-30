"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
var fs = require('fs');

var originalNote = {
  title: 'some title',
  body: 'some body'
}; // ecriture donnees

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('note.json', originalNoteString); // lecture donnees

var noteString = fs.readFileSync('note.json');
var note = JSON.parse(noteString);
console.log(_typeof(note));
console.log(note.title);
console.log('test babel compil 2 !');