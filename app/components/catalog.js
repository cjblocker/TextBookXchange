var React = require("react");
var ReactRouter = require("react-router");
var History = ReactRouter.History;
var Link = ReactRouter.Link;
var Book = require("./book.js")

var Catalog = React.createClass({
    render: function() {
        return (
            <div className='content'>
             <h2> TextBook Catalog: </h2>
            <p>
                <br/>
                <Book />
            </p>
            </div>

            );
    }

});

module.exports = Catalog;
