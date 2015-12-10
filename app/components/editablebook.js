var React = require("react");
var ReactRouter = require("react-router");
var History = ReactRouter.History;
var Link = ReactRouter.Link;
var api = require("./api.js");
var Dashboard = require("./dashboard.js");
var Book = require("./book.js");

var EditableBook = React.createClass({

	contextTypes: {
        location: React.PropTypes.object
    },

    mixins: [ History ],

	deleteEntry: function() {
		api.deleteBook(this.props, function(loggedIn) {
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

	updateEntry: function() {
	// api.updateBook(this.props, this.refs.title.value, this.refs.courseNumber.value, this.refs.edition.value, this.refs.author.value, this.refs.list_type.value, this.refs.price.value, this.refs.notes.value, function(loggedIn) {

      api.addBook(this.refs.title.value, this.refs.courseNumber.value, this.refs.edition.value, this.refs.author.value, this.refs.list_type.value, this.refs.price.value, this.refs.notes.value, function(loggedIn) {
      //login callback
      api.deleteBook(this.props, this.props.reload);
      if (!loggedIn)
        this.history.pushState(null, '/login');
      else
      {
      	this.history.pushState(null, '/login');
      	this.history.pushState(null, '/dashboard');
      }
        
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
    	notes: this.props.notes,
    	edit: false
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

	  handleClick: function(){
	  	event.preventDefault();
	  	this.setState({edit: !this.state.edit})
	  },

	render: function() {
		if (this.state.edit) {
			return this.renderEditable();
		}
		else{
			return <Book {...this.props} editable={true} editClick={this.handleClick} />
		}
	},

	renderEditable: function() {
  	var bookitem = {
	    width: 800,
	    borderRadius: 30,
	    backgroundColor: '#FBB040',
	    textAlign:'center',
	    display: 'inline-block',
	    margin: '5px 30px'
	}
	

    return (
    	<div>
    		<div style={bookitem}>
    				<br/> 
    				<div className='center' style={{width:650, padding:10}}>
    				<form className="form-vertical" >
    				<div style={{textAlign:'right'}}>
    				Title:    <input type="text" style = {{width:500}} onChange={this.titleChange} value = {this.state.title} ref="title" autoFocus={true} /><br/>
    				Course Number: <input type="text" style = {{width:500}} onChange={this.courseNumberChange} value = {this.state.courseNumber} ref="courseNumber" autoFocus={true} /><br/>
					Edition: <input type="text" style = {{width:500}} onChange={this.editionChange} value = {this.state.edition} ref="edition" autoFocus={true} /><br/>	 
    				Author: <input type="text" style = {{width:500}} onChange={this.authorChange} value = {this.state.author} ref="author" autoFocus={true} /><br/>	 
    				$ <input type="text" style = {{width:500}} onChange={this.priceChange} value={this.state.price} ref="price" autoFocus={true} /><br/>	 
				   	For <input type="text" style = {{width:500}} onChange={this.listTypeChange} value = {this.state.list_type} ref="list_type" autoFocus={true} /><br/>	 
				    Notes: <textarea type="text" style = {{width:500, maxWidth:500}} onChange={this.notesChange} value = {this.state.notes} ref="notes" autoFocus={true} /><br/>	 
					<br/>
					<input className = "btn btn-danger" type="remove" value="Remove" onClick={this.deleteEntry} />
					<input className="btn btn-warning" type="submit" value="Cancel" onClick={this.handleClick} />
					<input className="btn btn-warning" type="submit" value="Update" onClick={this.updateEntry} />
					</div>
					</form>
					</div>
    				
    			</div>
    	</div>

    	);
		}
	});

	module.exports = EditableBook;