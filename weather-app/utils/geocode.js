const request = require('request');
const urlForMap = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
const accessTokenAndLimit = '?access_token=pk.eyJ1Ijoic2ViYXN0aWFuZGFuaWxvbnIiLCJhIjoiY2t0YzNkY25rMjF1eTJuczFibjM2NjBkbSJ9.dhoh36xtYXi5iSh4Hls51A&limit=1';

const geocode = (address, callback) => {
    const url = `${urlForMap}${encodeURI(address)}.json${accessTokenAndLimit}`;
    request({ url: url , json: true }, (error, {body} = {}) => {
        if (error) {
            callback('Error connecting to server');
        } else if (!body || !body.features) {
            callback('Error, bad request');
        } else if(body.features && body.features.length === 0) {
            callback('No results found');
        } else {
            const longitud = body.features[0].center[0];
            const latitude = body.features[0].center[1];
            const location = body.features[0].place_name;
            callback( null, {
                location,
                longitud,
                latitude
            });
        }
    });
};

module.exports = geocode;