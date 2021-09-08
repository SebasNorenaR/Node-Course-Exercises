const fs = require('fs');
const chalk = require('chalk');

const NOTES_FILE = 'notes.json';
const getNotes = () => {
    return 'Your notes...';
};

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(note => note.title === title);
    
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('Note added'));
    } else {
        console.log(chalk.red.inverse('Note title is already taken'));
    }
};

const removeNote = (title) => {
    const notes = loadNotes();
    const newNotes = notes.filter(note => note.title !== title);

    if (notes.length === newNotes.length) {
        console.log(chalk.red.inverse('Note does not exist'));
    } else {
        saveNotes(newNotes);
        console.log(chalk.green.inverse('Note removed'));
    }
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync(NOTES_FILE);
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    } catch (e) {
        return [];
    }
};

const saveNotes =  notes => {
    fs.writeFileSync(NOTES_FILE, JSON.stringify(notes));
} 

module.exports = {
    getNotes: getNotes,
    addNote : addNote,
    removeNote: removeNote
};