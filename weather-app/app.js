const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

if(!process.argv[2]) {
    console.log('Please provide the location to search');
    return;
}
geocode(process.argv[2], (error, {latitude, longitud, location} = {}) => {
    if(error) {
        console.log(error);
    } else {
        forecast(latitude, longitud, (error,  forecastResult ) => {
            if(error){
                console.error(error);
            } else {
                console.log('ANSWER: Searched for:' , location);
                console.log(forecastResult);
            }
        });
    }
});

