var React = require("react");
var ReactRouter = require("react-router");
var History = ReactRouter.History;
var Link = ReactRouter.Link;
var api = require("./api.js");

var arrow = require("../img/arrow.png");


var Book = React.createClass({
	getInitialState: function() {
		return {open: false}
	},

	handleClick: function(){
		this.setState({open: !this.state.open});
	},

	renderInfo: function() {
		return (<div style={{height:130, padding: '20px'}}>
			<p>
				For: {this.props.list_type} <br />
				Offered by: {this.props.user} <br />
				Contact email: {this.props.userEmail} <br />
				Additional Notes: {this.props.notes}
			</p>
			
		</div>);
	},

	render: function() {
  	var bookitem = {
	    width: 800,
	    height: this.state.open?200:70,
	    borderRadius: "35px 10px 10px 35px",
	    backgroundColor: '#FBB040',
	    display: 'inline-block',
	    margin: '5px auto',
	    verticalAlign: 'top'
	}

	var priceCircle = {
		margin: 5,
		padding: "0 5px",
		minWidth: 120,
		height: 60,
		borderRadius: 30,
		backgroundColor: '#DE703C',
		fontFamily: 'Lobster', 
		fontSize: '2em',
		textAlign: 'center',
		lineHeight: '60px',
		display: 'inline-block',
		verticalAlign: 'top'
	}

	var arrowDiv = {
		display: 'inline-block', 
		width: 70, 
		height:70, 
		verticalAlign:'top',
		backgroundImage: 'url('+arrow+')',
		float: 'right'
	}

    return (
    	<div className='center' style={{width:800}}>
    		<div style={bookitem}>
    			<div style={{height:70, width:'100%'}}>
    				<div style={priceCircle}> ${this.props.price} </div>
    				<div style={{display:'inline-block', marginLeft:'10px'}}>
    					<span style={{fontSize:'2em'}}> {this.props.title}</span> 
    					<span style={{fontSize: '1.5em', fontStyle:'italic'}}>, {this.props.edition} edition</span><br />
    					<span style={{fontSize: '1.5em'}}>By: {this.props.author} </span>
    				</div>
    				{this.props.editable?<div className = "btn btn-danger" style={{height:50, width:200, fontSize: '2em', textAlign:'center', float:'right', margin: '10px'}} onClick={this.props.editClick}> Edit </div>:""}
    				<div className={this.state.open?"verticalFlip":""} style={arrowDiv} onClick={this.handleClick}></div>
    			</div>
    			{this.state.open?this.renderInfo():""}
    		</div>
    	</div>

    	);
	}

	});

	module.exports = Book;