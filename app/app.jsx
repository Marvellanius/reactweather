var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');
var Game = require('Game');

// Load Foundation
require('style!css!foundation-sites/dist/foundation.min.css')
// App CSS
require('style!css!sass!applicationStyles')
$(document).foundation();

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="about" component={About}/>
			<Route path="examples" component={Examples}/>
            <Route path="games" component={Game}/>
			<IndexRoute component={Weather}/>
		</Route>

	</Router>,
	document.getElementById('app')
);
