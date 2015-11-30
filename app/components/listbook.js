var React = require("react");
var ReactRouter = require("react-router");

var Link = ReactRouter.Link;


var ListBook = React.createClass({
      render: function() {
        return (
            <div>
            <p>
                <h2> List a Textbook: </h2>
                <form className="form-vertical" onSubmit={this.request}>
                <input type="text" placeholder="Book Title" ref="booktitle" autoFocus={true} />
                <input type="text" placeholder="Course Number" ref="coursenumber"/>
                <input type="text" placeholder="Edition" ref="edition"/>
                <input type="text" placeholder="Rent or Sell" ref="listtype"/>
                <input type="text" placeholder="Asking Price" ref="bookprice"/>
                
                <input className="btn btn-warning" type="submit" value="Submit" />
                </form>

            </p>
            </div>

            );
    }


});

module.exports = ListBook;
