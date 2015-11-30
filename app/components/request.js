var React = require("react");
var ReactRouter = require("react-router");

var Link = ReactRouter.Link;

var Request = React.createClass({

    request: function(event) {
        // prevent default browser submit
        event.preventDefault();
        // get data from form
        var btitle = this.refs.booktitle.getDOMNode().value;
        var cnumber = this.refs.coursenumber.getDOMNode().value;
        if (!btitle || !cnumber) {
            return;
        }
        // login via API
        auth.username(btitle, cnumber, function(loggedIn) {
            // login callback
            if (!loggedIn)
                return this.setState({
                    error: true
                });
            this.context.router.transitionTo('/request');
        }.bind(this));
    },


    render: function() {
        return (
            <div>
            <p>
                <h2> Request a Textbook: </h2>
                <form className="form-vertical" onSubmit={this.request}>
                <input type="text" placeholder="Book Title" ref="booktitle" autoFocus={true} />
                <input type="text" placeholder="Course Number" ref="coursenumber"/>
                <input type="text" placeholder="Edition" ref="edition"/>
                <input className="btn btn-warning" type="submit" value="Request" />
                </form>

            </p>
            </div>

            );
    }

    

});

module.exports = Request;
