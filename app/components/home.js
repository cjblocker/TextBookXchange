var React = require("react");
var ReactRouter = require("react-router");
var banner = require("../img/textbooks.jpg");

var Link = ReactRouter.Link;

var Home = React.createClass({
  render: function() {
  	var imgBanner = {
		width: 1000,
		height: 500,
		backgroundImage: 'url('+banner+')',
		backgroundSize: '1000px auto',
		backgroundRepeat: 'no-repeat',
    verticalAlign: 'center'
	};
	var searchTitleDiv = {
		margin:  '150px 300px',
    width: 400,
    borderRadius: 20,
    backgroundColor: '#FBB040',
		textAlign: 'center',
    display: 'inline-block'
	};
    return (<div>
    		<div style={imgBanner}>
    			<div style={searchTitleDiv}>
    				<h3> Welcome to </h3>
    				<h1> TextBookXchange </h1>
    				<br />
    				<h2> [Place Search Bar Here] </h2>
    			</div>
    		</div>
        <div className='content'>
        <br/>
        <div style={{textAlign:'center'}}>
        <h1> Welcome! </h1>
        <p>
          We are committed to giving students the best option to rent, sell or buy textbooks!
          <br/>Feel free to look for a specific book without commitment!
          <br/>Or, register to be able to list or request a book.
        </p>
        </div>
        </div>
    	</div>
    );
  }
});

module.exports = Home;
