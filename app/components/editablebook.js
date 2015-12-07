var React = require("react");
var ReactRouter = require("react-router");
var History = ReactRouter.History;
var Link = ReactRouter.Link;
var api = require("./api.js");
var Dashboard = require("./dashboard.js");

var EditableBook = React.createClass({

	contextTypes: {
        location: React.PropTypes.object
    },

    mixins: [ History ],

	deleteEntry: function() {
		api.deleteBook(this.props, function(loggedIn) {
      // login callback

      if (!loggedIn)
        this.history.pushState(null, '/login');
      else
      {
      	this.history.pushState(null, '/login');
      	this.history.pushState(null, '/dashboard');
      }
        
    }.bind(this));
		
	},

	updateEntry: function() {
		//this.deleteEntry();
		console.log(this.refs.title.value);console.log(this.refs.edition.value);
		console.log(this.refs.courseNumber.value);
		
		console.log(this.refs.author.value);
		console.log(this.refs.list_type.value);
		console.log(this.refs.price.value);
		console.log(this.refs.notes.value);

		//api.deleteBook(this.props, function(){});
		//api.addBook(this.refs.title.value, this.refs.courseNumber.value, this.refs.edition.value, this.refs.author.value, this.refs.list_type.value, this.refs.price.value, this.refs.notes.value, function(loggedIn) {
      api.updateBook(this.refs.title.value, this.refs.courseNumber.value, this.refs.edition.value, this.refs.author.value, this.refs.list_type.value, this.refs.price.value, this.refs.notes.value, function(loggedIn) {
      	//this.deleteEntry();
      if (!loggedIn)
        this.history.pushState(null, '/login');
      else
        this.history.pushState(null, '/dashboard');
    }.bind(this));
	},

	getInitialState: function() {
    return {
    	title: this.props.title,
    	courseNumber: this.props.courseNumber,
    	edition: this.props.edition,
    	author: this.props.author,
    	list_type: this.props.list_type,
    	price: this.props.price,
    	notes: this.props.notes
    	}
  	},

	  titleChange: function(event) {
	  	this.setState({
	  		title: event.target.value
	  	})
	  },

	  courseNumberChange: function(event) {
	  	this.setState({
	  		courseNumber: event.target.value
	  	})
	  },

	  editionChange: function(event) {
	  	this.setState({
	  		edition: event.target.value
	  	})
	  },

	  authorChange: function(event) {
	  	this.setState({
	  		author: event.target.value
	  	})
	  },

	  listTypeChange: function(event) {
	  	this.setState({
	  		list_type: event.target.value
	  	})
	  },

	  priceChange: function(event) {
	  	this.setState({
	  		price: event.target.value
	  	})
	  },

	  notesChange: function(event) {
	  	this.setState({
	  		notes: event.target.value
	  	})
	  },

	render: function() {
  	var bookitem = {
	    width: 800,
	    height: 300,
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
    				<form className="form-vertical" >
    				Title:    <input type="text" style = {{width:500}} onChange={this.titleChange} value = {this.state.title} ref="title" autoFocus={true} /><br/>
    				Course Number: <input type="text" style = {{width:500}} onChange={this.courseNumberChange} value = {this.state.courseNumber} ref="courseNumber" autoFocus={true} /><br/>
					Edition: <input type="text" style = {{width:500}} onChange={this.editionChange} value = {this.state.edition} ref="edition" autoFocus={true} /><br/>	 
    				Author: <input type="text" style = {{width:500}} onChange={this.authorChange} value = {this.state.author} ref="author" autoFocus={true} /><br/>	 
    				$ <input type="text" style = {{width:500}} onChange={this.priceChange} value={this.state.price} ref="price" autoFocus={true} /><br/>	 
				   	For <input type="text" style = {{width:500}} onChange={this.listTypeChange} value = {this.state.list_type} ref="list_type" autoFocus={true} /><br/>	 
				    Notes: <input type="text" style = {{width:500}} onChange={this.notesChange} value = {this.state.notes} ref="notes" autoFocus={true} /><br/>	 
					<button className = "btn btn-warning" type ="remove" value = "Remove" onClick={this.deleteEntry}></button>
					<input className="btn btn-warning" type="submit" value="Submit" />
					</form>
    				
    			</div>
    	</div>

    	);
		}
	});

	module.exports = EditableBook;