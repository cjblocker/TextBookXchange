var React = require("react");
var ReactRouter = require("react-router");

var Link = ReactRouter.Link;

// Home page, which shows Login and Register buttons
var Footer = React.createClass({
  render: function() {
  	
    return (<div className='foot'>
    		&copy; Cameron Blocker and Brian Watson 2015
    	</div>
    );
  }
});

module.exports = Footer;