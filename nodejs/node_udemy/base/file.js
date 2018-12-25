console.log("starting file");

const fs = require('fs');

let addNote = (title, body) => {
	let notes = [];
	let note = {
		title: title,
		body //new syntax
	};

	try {
		let notesString = fs.readFileSync('notes-data.json');
		notes = JSON.parse(notesString);
	} catch(e) {

	}

	let duplicateNotes = notes.filter(() => note.title === title);
	if (duplicateNotes.lenght === 0)
		//TODO continue here
	notes.push(note);
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let getAll = () => {
	console.log('getting all notes');
};

let read = (title, body) => {
	console.log('reading note ', title, body);
};

let remove = (title) => {
	console.log('removing note', title);
};

module.exports = {
	addNote: addNote,
	getAll,
	read,
	remove,
}
