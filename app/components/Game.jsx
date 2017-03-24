var React = require('react');
var GameMessage = require('GameMessage');
var GameForm = require('GameForm');
var openWeatherMap = require('openWeatherMap');
var testApi = require('testApp');

var Game = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false,
        }
    },
    handleSearch: function(console) {
        var that = this;
        this.setState({isLoading: true});
        testApi.getGamesPerConsole(console).then(function(gameconsole) {
            that.setState({
                console: gameconsole.console,
                title: gameconsole.title,
                release_date: gameconsole.release_date,
                isLoading: false
            });
        }, function(errorMessage) {
            that.setState({isLoading: false});
            alert(errorMessage);
        });
    },
    render: function() {
        var {console, title, release_date, isLoading} = this.state;
        debugger;
        function renderMessage(){
            if(isLoading){
                return <h3 className="text-center">Fetching games...</h3>;
            } else if(console) {
                return <GameMessage release_date={release_date} title={title} console={console}/>;
            }
        }

        return (
            <div>
                <h1 className="text-center page-title">Get Games</h1>
                <GameForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Game;
