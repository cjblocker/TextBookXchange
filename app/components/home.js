var React = require("react");
var ReactRouter = require("react-router");
var banner = require("../img/textbooks.jpg");

var Link = ReactRouter.Link;

var Home = React.createClass({
  getInitialState: function() {
    return {searchValue: ""}
  },
  formChange: function(event) {
    this.setState({searchValue: event.target.value});
  },
  render: function() {
  	var imgBanner = {
		width: 1000,
		height: 500,
		backgroundImage: 'url('+banner+')',
		backgroundSize: '1000px auto',
		backgroundRepeat: 'no-repeat',
        verticalAlign: 'center'
	};
	var searchTitleDiv = {
		margin:  '150px 300px',
        width: 400,
        borderRadius: 20,
        backgroundColor: '#FBB040',
		textAlign: 'center',
        display: 'inline-block',
        opacity: .95
	};
    return (<div>
    		<div style={imgBanner}>
    			<div style={searchTitleDiv}>
    				<h3> Welcome to </h3>
    				<h1 style={{fontFamily: 'Lobster', fontSize: '3.5em'}}> TextBook<span style={{fontSize: 'larger'}}>X</span>change </h1>
    				<br />
    				<form role="search">
                <div className="form-group">
                  <input type="text" value={this.state.searchValue} onChange={this.formChange} className="form-control" placeholder="Search for a Textbook here" style={{width:'60%',display:'inline', borderRadius: '10px 0 0 10px', fontStyle:'italic'}} />
                <button type="submit" className="btn search-btn" style={{display:'inline'}}>Submit</button>
                </div>
            </form>
    			</div>
    		</div>
        <div className='content'>
        <br/>
        <div style={{textAlign:'center'}}>
        <h1> Welcome! </h1>
        <p>
          We are committed to giving students the best option to rent, sell or buy textbooks!
          <br/>Feel free to look for a specific book without commitment!
          <br/>Or, register to be able to list or request a book.
        </p>
        </div>
        </div>
    	</div>
    );
  }
});

module.exports = Home;
