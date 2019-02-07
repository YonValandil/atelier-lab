"use strict";

console.log('starting file');

var fs = require('fs');

var addNote = function addNote(title, body) {
  var notes = [];
  var note = {
    title: title,
    body: body // new syntax, no need to repeat body: body

  };

  try {
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch (e) {}

  var duplicateNotes = notes.filter(function () {
    return note.title === title;
  });

  if (duplicateNotes.lenght === 0) {
    // TODO continue here !
    notes.push(note);
  }

  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var getAll = function getAll() {
  console.log('getting all notes');
};

var read = function read(title, body) {
  console.log('reading note ', title, body);
};

var remove = function remove(title) {
  console.log('removing note', title);
}; // Test types errors with Flow JS


function square(n) {
  return n * n; // Error!
}

square('2');
module.exports = {
  addNote: addNote,
  getAll: getAll,
  read: read,
  remove: remove
};