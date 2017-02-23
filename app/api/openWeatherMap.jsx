var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?units=metric&appid=108d4f22084051c594b7395a5267d2b0';

// 108d4f22084051c594b7395a5267d2b0

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function(res) {
            debugger;
            if (res.data.cod && res.data.message != 'accurate') {
                throw new Error(res.data.message);
            } else {
                return res.data.list[0].main.temp;
            }
        }, function(res) {
            throw new Error(res.data.message);
        });
    }
}