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
    				<p>   {this.props.bookCourse}	{this.props.bookTitle} 	{this.props.bookPrice}
	    				<br/><br/>
					    {this.props.bookSeller}  {this.props.bookSellerEmail}							
					</p>
    				
    			</div>
    	</div>

    	);
		}
	});

	module.exports = Book;