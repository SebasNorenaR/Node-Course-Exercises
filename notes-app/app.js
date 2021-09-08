const notes = require('./notes');
const yargs = require('yargs');

// customize yargs version
yargs.version('1.1.0');

// add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Description for note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
});

// remove command
yargs.command({
    command: 'remove',
    describe: 'Removes a note',
    builder: {
        title:{
            describe: 'Note title to remove',
            demandOption: true,
            ttype: 'string'
        }
    },
    handler(argv) {
      notes.removeNote(argv.title);
    }
});

// list command
yargs.command({
    command: 'list',
    describe: 'Lists the notes',
    handler() {
      notes.listNotes();
    }  
});

// read command
yargs.command({
    command: 'read',
    describe: 'reads a note',
    builder: {
        title:{
            describe: 'Title of the note to read',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
      notes.readNote(argv.title);
    }
});

// add, remove, read, list
yargs.parse();
// console.log(yargs.argv);