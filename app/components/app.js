var React = require("react");
var ReactRouter = require("react-router");
var History = ReactRouter.History;

var auth = require("./auth.js");
var Link = ReactRouter.Link;


// Top-level component for the app
var App = React.createClass({
  // mixin for navigation
  mixins: [ History ],

  // initial state
  getInitialState: function() {
    return {
      // the user is logged in
      loggedIn: auth.loggedIn()
    };
  },

  // callback when user is logged in
  setStateOnAuth: function(loggedIn) {
    this.setState({loggedIn:loggedIn});
  },

  // when the component loads, setup the callback
  componentWillMount: function() {
    auth.onChange = this.setStateOnAuth;
  },

  // logout the user and redirect to home page
  logout: function(event) {
    auth.logout();
    this.history.pushState(null, '/');
  },

  // show the navigation bar
  // the route handler replaces the RouteHandler element with the current page
  render: function() {
    return (
      <div>
        <nav className="navbar navbar-inverse" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
		<span className="sr-only">Toggle navigation</span>
		<span className="icon-bar"></span>
		<span className="icon-bar"></span>
		<span className="icon-bar"></span>
              </button>
              <div>
              <a className="navbar-brand" href="/">TextBookXChange</a>
              <Link className="btn btn-warning" to="login">Login</Link>
             <Link className="btn btn-warning" to="register">Register</Link>
             <Link className="btn btn-warning" to="catalog">Catalog</Link>
             <Link className="btn btn-warning" to="request">Request</Link>
             <Link className="btn btn-warning" to="listbook">List Book</Link>
              </div>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              {this.state.loggedIn ? (
                 <ul className="nav navbar-nav">
                   <li><a href="#/list">All</a></li>
                   <li><a href="#/list/active">Active</a></li>
                   <li><a href="#/list/completed">Completed</a></li>
                   <li><a href="#" onClick={this.logout}>Logout</a></li>
                 </ul>
               ) : (<div></div>)}
            </div>
          </div>
        </nav>
	<div className="container">
	  {this.props.children}
	</div>
      </div>
    );

  }
});

module.exports = App;
