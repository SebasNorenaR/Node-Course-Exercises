const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

if(!process.argv[2]) {
    console.log('Please provide the location to search');
    return;
}
geocode(process.argv[2], (error, data) => {
    if(error) {
        console.log(error);
    } else {
        console.log(data);
        forecast(data.latitude, data.longitud, (error,  forecastResult ) => {
            if(error){
                console.error(error);
            } else {
                console.log('ANSWER:');
                console.log(forecastResult);
            }
        });
    }
});

