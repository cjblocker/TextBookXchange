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

	getInitialState: function() {
		return({
			found : 0
		})
	},

	componentDidMount: function() {
        api.getBooks(this.listSet);        
    },

  // callback for getting the list of items, sets the list state
  listSet: function(status, data) {
      // set the state for the list of items
      if(status){
          this.setState({
            items: data.items,
          
          });
          this.findMatches();
      }
  },

	findMatches: function() {
		for(var i = 0; i < this.state.items.length; i++)
		{
			if(this.state.items[i].title == this.props.title)
			{
				this.setState({
					found : 1
				});
			}
			if(this.state.items[i].courseNumber == this.props.course)
			{
				this.setState({
					found : 1
				});
			}
		}
	},

	
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
    				<p>   
    				Title: {this.props.title}	
    				<br/>
    				Course Number: {this.props.course} 
    				{this.state.found?"Item is in Catalog":"Item is not available"}

    				<br/>
	    			<input className = "btn btn-danger" type="remove" value="Remove" onClick={this.deleteRequest} />

					</p>
    				
    			</div>
    	</div>

    	);
		}
	});

	module.exports = BookRequest;