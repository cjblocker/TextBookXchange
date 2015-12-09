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
        console.log("THIS:::");
        console.log(this.props.value);
        api.getBooks(this.listSet);
    },

  // callback for getting the list of items, sets the list state
  listSet: function(status, data) {
      // set the state for the list of items
      if(status)
          this.setState({
            items: data.items
          });
  },

  //this.state.items contains items
    render: function() {
          console.log(this.state.items)
         var list = this.state.items.map(function(bookProps)
            {
                return <Book key={bookProps.id} {...bookProps}/>
            });
        return (
            <div className='content'>
             <h2> TextBook Catalog: </h2>
                {this.props.location.query.q?(<h3>Displaying Results for {this.props.location.query.q}</h3>):""}
                <br/>
                {list}
            </div>
            );
    }

});

module.exports = Catalog;
