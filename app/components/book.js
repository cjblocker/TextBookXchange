var React = require("react");
var ReactRouter = require("react-router");
var History = ReactRouter.History;
var Link = ReactRouter.Link;


var Book = React.createClass({

	render: function() {
  	var bookitem = {
	    width: 800,
	    height: 100,
	    borderRadius: 70,
	    backgroundColor: '#FBB040',
	    textAlign:'center',
	    display: 'inline-block',
	    opacity: .95
	};
	
    return (
    	<div>
    		<div style={bookitem}>
    				<p>   CS360 					WE DONT HAVE A BOOK 					$Priceless<br/>
    				      CameronBlocker			Is Lame									(123)-456-789
    				      </p>
    				
    			</div>
    	</div>

    	);
		}
	});

	module.exports = Book;