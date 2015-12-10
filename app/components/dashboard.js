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
      if(status)
          this.setState({
            items: data.items
          });
   
  	},

    render: function() {
        var infoDiv = {
          width: 400,
          textAlign: 'center'
        }

        var listreq = this.state.requests.map(function(requestProps)
        {
            return <BookRequest key={requestProps.id} {...requestProps}/>
        });

        if (this.state.requests.length == 0) {
          listreq = <div className='center' style={infoDiv}><p>You have not requested any books. <Link to="/request"> Click here </Link> to make your first request! Requested books will appear on your dashboard as they become available</p></div>
        };

    	  var list = this.state.items.map(function(bookProps)
        {
            return <EditableBook key={bookProps.id} {...bookProps}/>
        });

        if (this.state.items.length == 0) {
          list = <div className='center' style={infoDiv}><p>You have not posted any books. <Link to="/listbook"> Click here </Link> to list your first book! Books you post will be viewable to the public on the catalog page</p></div>
        };

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
