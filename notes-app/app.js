const getNotes = require('./notes');
const yargs = require('yargs');
const chalk = require('chalk');

// customize yargs version
yargs.version('1.1.0');

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('adding a new note');
    }
});

// remove command
yargs.command({
    command: 'remove',
    describe: 'Removes a note',
    handler: () => {
      console.log('removing the note');  
    }  
});

// add, remove, read, list
console.log(yargs.argv);