var React = require("react");
var ReactRouter = require("react-router");
var History = ReactRouter.History;
var Link = ReactRouter.Link;


var Book = React.createClass({

	render: function() {
  	var bookitem = {
	    width: 800,
	    height: 100,
	    borderRadius: 30,
	    backgroundColor: '#FBB040',
	    textAlign:'center',
	    display: 'inline-block',
	    opacity: .95,
	    margin: '15px 30px'
	};

    return (
    	<div>
    		<div style={bookitem}>
    				<br/>
    				<p>   {this.props.title}	{this.props.courseNumber} 	{this.props.edition}	{this.props.price}
	    				<br/><br/>
					    {this.props.user} 	{this.props.userEmail}		{this.props.list_type}
					</p>
    				
    			</div>
    	</div>

    	);
		}
	});

	module.exports = Book;