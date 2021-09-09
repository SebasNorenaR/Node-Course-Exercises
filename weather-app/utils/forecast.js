const request = require('request');
const forecasturl = 'http://api.weatherstack.com/current?access_key=12f84faee577c3beacfc4ecd574646d2&query=';
const forecast = (latitude, longitud, callback) => {
    const url = `${forecasturl}${latitude},${longitud}`;
    request({ url: url , json: true }, (error, response) => {
        if(error) {
            callback('Error connecting to server');
        } else if (response.body.error) {
            callback('Unable to find location');
        } else {
            const data = response.body;
            const answer = `Is ${data.current.weather_descriptions[0]} The temperature is ${data.current.temperature}, it feels like ${data.current.feelslike}.`
            callback(null, answer);
        }
    });
}

module.exports = forecast;