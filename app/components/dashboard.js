var React = require("react");
var ReactRouter = require("react-router");
var History = ReactRouter.History;
var Link = ReactRouter.Link;
var Book = require("./book.js")
var api = require("./api.js");
 
var Dashboard = React.createClass({
     
    getInitialState: function() {
        return ({
            items : []
        });
    },

    componentDidMount: function() {
        api.getUserBooks(this.listSet);
    },

    listSet: function(status, data) {
      // set the state for the list of items
      if(status)
          this.setState({
            items: data.items
          });

        console.log(this.state.items);
   
  	},

    render: function() {
    	 var list = this.state.items.map(function(bookProps)
            {
                return <Book {...bookProps}/>
            });

        return (
         <div className='content'>
        <h3> User Profile: </h3>
         {list}
        </div>
            );
    }

});

module.exports = Dashboard;
