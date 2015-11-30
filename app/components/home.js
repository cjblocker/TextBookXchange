var React = require("react");
var ReactRouter = require("react-router");
var banner = require("../img/textbooks.jpg");

var Link = ReactRouter.Link;

// Home page, which shows Login and Register buttons
var Home = React.createClass({
  render: function() {
  	var imgBanner = {
		width: 1000,
		height: 500,
		backgroundImage: 'url('+banner+')',
		backgroundSize: '1000px auto',
		backgroundRepeat: 'no-repeat'
	};
	var searchTitleDiv = {
		padding: '100px 0',
		textAlign: 'center'
	};
    return (<div>
    		<div style={imgBanner}>
    			<div style={searchTitleDiv}></div>
    			<div style={searchTitleDiv}>
    				<h3> Welcome to </h3>
    				<h1> TextBookXchange </h1>
    				<br />
    				<h2> [Put Search Bar Here] </h2>
    			</div>
    			<div style={searchTitleDiv}></div>
    		</div>
    	</div>
    );
  }
});

module.exports = Home;
