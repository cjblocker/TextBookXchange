var React = require("react");
var ReactRouter = require("react-router");
var History = ReactRouter.History;
var Link = ReactRouter.Link;
var api = require("./api.js");


var BookRequest = React.createClass({

	contextTypes: {
        location: React.PropTypes.object
    },


    mixins: [ History ],

	deleteRequest: function() {
		api.deleteRequest(this.props, function(loggedIn) {
      //login callback

      if (!loggedIn)
        this.history.pushState(null, '/login');
      else
      {
      	this.history.pushState(null, '/login');
      	this.history.pushState(null, '/dashboard');
      }
        
    }.bind(this));
		
	},

	render: function() {
  	var requestitem = {
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
    		<div style={requestitem}>
    			
    				<br/>
    				<p>   
    				Request: <br/>
    				Title: {this.props.title}	
    				<br/>
    				Course Number: {this.props.course}  
    				<br/>
	    			<input className = "btn btn-danger" type="remove" value="Remove" onClick={this.deleteRequest} />

					</p>
    				
    			</div>
    	</div>

    	);
		}
	});

	module.exports = BookRequest;