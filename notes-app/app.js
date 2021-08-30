const getNotes = require('./notes');
const chalk = require('chalk');

const command = process.argv[2];
if(command && command === 'add') {
    console.log('Adding notes');
} else {
    console.log('Unknown command');
}