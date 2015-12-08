var React = require("react");
var ReactRouter = require("react-router");
var History = ReactRouter.History;
var Link = ReactRouter.Link;
var api = require("./api.js");


var Book = React.createClass({

	contextTypes: {
        location: React.PropTypes.object
    },

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
	}

    return (
    	<div>
    		<div style={bookitem}>
    			
    				<br/>
    				<p>   
    				Title: {this.props.title}	Course Number: {this.props.courseNumber} 	Edition: {this.props.edition}  Author: {this.props.author}	${this.props.price}
	    				<br/>
					    Seller: {this.props.user} 	Email Address:{this.props.userEmail}		For {this.props.list_type} 
					    <br/> 
					    {this.props.notes}

					</p>
    				
    			</div>
    	</div>

    	);
		}
	});

	module.exports = Book;