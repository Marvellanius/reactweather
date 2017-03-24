var React = require('react');

var GameMessage = ({console, title, release_date}) => {
    return (
        <div>
            <h2 className="text-center">{console}</h2>
            <h4 className="text-center">{title}</h4>
            <p className="text-center">{release_date}</p>
        </div>
    )
};

module.exports = GameMessage;