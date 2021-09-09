const http = require('http');

const url = 'http://api.weatherstack.com/current?access_key=12f84faee577c3beacfc4ecd574646d2&query=37,-122';

const request = http.request(url, (response) => {
    let data = '';
    response.on('data', (chunk)=> {
        data = data + chunk.toString();
    });

    response.on('end', ()=> {
        const response = JSON.parse(data);
        console.log(response); 
    });
});
request.on('error', error => {
    console.error('ERROR:');
    console.error(error);
});
request.end();

