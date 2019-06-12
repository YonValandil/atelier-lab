console.log('starting file');

const fs = require('fs');

// fs.

const addNote = (title, body) => {
  let notes = [];
  const note = {
    title,
    body, // new syntax, no need to repeat body: body
  };

  try {
    const notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch (e) {}

  const duplicateNotes = notes.filter(() => note.title === title);
  if (duplicateNotes.lenght === 0) {
    // TODO continue here !
    notes.push(note);
  }
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const getAll = () => {
  console.log('getting all notes');
  // consol
};

const read = (title, body) => {
  console.log('reading note ', title, body);
};

const remove = (title) => {
  console.log('removing note', title);
};

// Test types errors with Flow JS
function square(n: number) {
  return n * n; // Error!
}

square(true);
square('2');
//----------------------

module.exports = {
  addNote,
  getAll,
  read,
  remove,
};
