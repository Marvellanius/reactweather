var React = require('react');

var GameForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();

        var updates = {};
        var console = this.refs.console.value;

        if(console.length > 0){
            this.refs.console.value = '';
            this.props.onSearch(console);
        }
        this.props.onSearch(console);
    },
    render: function() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="console" placeholder="xbox, ps4, pc, ds of switch" /> 
                    <button type="submit" className="button expanded hollow">Get Games!</button>
                </form>
            </div>
        );
    }
});

module.exports = GameForm;