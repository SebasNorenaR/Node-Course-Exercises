const request = require('request');
const forecasturl = 'http://api.weatherstack.com/current?access_key=12f84faee577c3beacfc4ecd574646d2&query=';
const forecast = (latitude, longitud, callback) => {
    const url = `${forecasturl}${latitude},${longitud}`;
    request({ url, json: true }, (error, { body } = {}) => {
        if(error) {
            callback('Error connecting to server');
        } else if (body.error) {
            callback('Unable to find location');
        } else {
            
            const answer = `Is ${body.current.weather_descriptions[0]} The temperature is ${body.current.temperature}, it feels like ${body.current.feelslike}.`
            callback(null, answer);
        }
    });
}

module.exports = forecast;