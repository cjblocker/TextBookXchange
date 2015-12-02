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
		padding: '200px 0',
		textAlign: 'center'
	};
    return (<div>
    		<div style={imgBanner}>
    			<div style={searchTitleDiv}>
    				<h3> Welcome to </h3>
    				<h1> TextBookXchange </h1>
    				<br />
    				<h2> [Put Search Bar Here] </h2>
    			</div>
    		</div>
        <br/>
        <h1> Welcome! </h1>
        <p>
          We are committed to giving students the best option to rent, sell or buy textbooks!
          <br/>Feel free to look for a specific book without commitment!
          <br/>Or, register to be able to list or request a book.
        </p>
    	</div>
    );
  }
});

module.exports = Home;
