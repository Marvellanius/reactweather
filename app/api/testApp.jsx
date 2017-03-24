var axios = require('axios');

const TEST_API_URL = 'http://localhost:8000/api/console';

// 108d4f22084051c594b7395a5267d2b0

module.exports = {
    getGamesPerConsole: function (console) {
        var encodedConsole = encodeURIComponent(console);
        var requestUrl = `${TEST_API_URL}/${encodedConsole}`;

        return axios.get(requestUrl).then(function(res) {
            if (res.data) {
                var response = res.data;
                debugger;
                return res.data;
            }
        }, function(res) {
            throw new Error(res.data);
        });
    }
}