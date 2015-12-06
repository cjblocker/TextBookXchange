var React = require("react");
var ReactRouter = require("react-router");
var History = ReactRouter.History;
var Link = ReactRouter.Link;
var Book = require("./book.js")
var api = require("./api.js");

 
var Catalog = React.createClass({
    
    getInitialState: function() {
        return ({
            items : []
        });
    },

    componentDidMount: function() {
        api.getBooks(this.listSet);
    },

  // callback for getting the list of items, sets the list state
  listSet: function(status, data) {
      // set the state for the list of items
      if(status)
          this.setState({
            items: data.items
          });
        console.log(this.state.items);
  },

  //this.state.items contains items
    render: function() {
         var list = this.state.items.map(function(bookProps)
            {
                return <Book {...bookProps}/>
            });
        return (
            <div className='content'>
             <h2> TextBook Catalog: </h2>
                <br/>
                {list}
            </div>
            );
    }

});

module.exports = Catalog;
