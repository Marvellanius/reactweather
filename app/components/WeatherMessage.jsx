var React = require('react');

var WeatherMessage = ({temp, location}) => {
    return (
        <div>
            <h1>It is {temp} degrees in {location}!</h1>
        </div>
    )
};

module.exports = WeatherMessage;