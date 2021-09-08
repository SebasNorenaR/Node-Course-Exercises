const fs = require('fs');

// -----writing------ //


/* const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday' 
};
const bookJSON = JSON.stringify(book);
fs.writeFileSync('1-json.json', bookJSON); */

// --------reading file-------//


/* const dataBuffer = fs.readFileSync('1-json.json');
const dataJson = dataBuffer.toString();
const data = JSON.parse(dataJson);
console.log(data.title); */

//----challenge----//
const dataBuffer = fs.readFileSync('1-json.json');
const dataJson = dataBuffer.toString();
const user = JSON.parse(dataJson);

user.name = 'Gunter';
user.age = 54;

fs.writeFileSync('1-json.json', JSON.stringify(user));