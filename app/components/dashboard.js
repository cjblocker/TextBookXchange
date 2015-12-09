var React = require("react");
var ReactRouter = require("react-router");
var History = ReactRouter.History;
var Link = ReactRouter.Link;
var Book = require("./book.js");
var api = require("./api.js");
var EditableBook = require("./editablebook.js");
var BookRequest = require("./bookrequest.js");
var Dashboard = React.createClass({

    getInitialState: function() {
        return ({
            items : [],
            requests : []
        });
    },

    componentDidMount: function() {
        api.getUserBooks(this.listSet);
        api.getRequests(this.listRequests);
    },

    listRequests: function(status, data) {
      if(status)
        this.setState({
          requests: data.items
        });
    },

    listSet: function(status, data) {
      // set the state for the list of items
      console.log(data.items);
      if(status)
          this.setState({
            items: data.items
          });
   
  	},

    render: function() {
        var listreq = this.state.requests.map(function(requestProps)
        {
            return <BookRequest {...requestProps}/>
        });

    	  var list = this.state.items.map(function(bookProps)
        {
            return <EditableBook {...bookProps}/>
        });

        return (
         <div className='content'>
        <h3> User Profile: </h3>
        <h4> Requests: </h4>
        {listreq}

        <br/><br/>
        <h4> My Books: </h4>
         {list}
        </div>
        );
    }

});

module.exports = Dashboard;
