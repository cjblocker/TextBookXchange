var React = require("react");
var ReactRouter = require("react-router");
var History = ReactRouter.History;

var auth = require("./auth.js");
var Link = ReactRouter.Link;
var Navibar = require("./navibar")
var Footer = require("./footer")


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
        <Navibar loggedIn={this.state.loggedIn} logout={this.logout}/>
	<div className="container">{this.props.children}
        <Footer />
  </div>
      </div>
    );

  }
});

module.exports = App;
