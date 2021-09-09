const fs = require('fs');
const chalk = require('chalk');

const NOTES_FILE = 'notes.json';

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicatedNote = notes.find(note => note.title === title);
    
    if (!duplicatedNote) {
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

const listNotes = () => {
    const notes = loadNotes();
    if (notes.length > 0) {
        console.log(chalk.cyan.inverse('\nMy Notes:'));
        notes.forEach( note => {
            console.log(chalk.cyan.inverse('\nNOTE'));
            console.log(chalk.green.inverse('Title :'), note.title);
            console.log(chalk.green.inverse('Body :'), note.body);
        });
    } else {
        console.log(chalk.red.inverse('No notes to show'));
    }
};

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find(note => note.title === title);
    if (note) {
        console.log(chalk.cyan.inverse('NOTE'));
        console.log(chalk.green.inverse('Title :'), note.title);
        console.log(chalk.green.inverse('Body :'), note.body);
    } else {
        console.log(chalk.red.inverse('Note does not exist'));
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
};

module.exports = {
    listNotes: listNotes,
    readNote: readNote,
    addNote : addNote,
    removeNote: removeNote
};