var React = require("react");
var ReactRouter = require("react-router");

var Link = ReactRouter.Link;

var Request = React.createClass({

    request: function(event) {
        // prevent default browser submit
        event.preventDefault();
        // get data from form
        var btitle = this.refs.booktitle.value;
        var cnumber = this.refs.coursenumber.value;
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
            this.context.router.transitionTo('/dashboard');
        }.bind(this));

        this.refs.booktitle.value = '';
        this.refs.coursenumber.value = '';

    },


    render: function() {
        return (
            <div className='content'>
      <div className='center' style={{width:300}}>
            <p>
                <h2> Request a Textbook: </h2>
                <form className="form-vertical" onSubmit={this.request}>
                <input type="text" placeholder="Book Title" ref="booktitle" autoFocus={true} />
                <br/><br/>
                <input type="text" placeholder="Course Number" ref="coursenumber"/>
                <br/><br/>
                <input type="text" placeholder="Edition" ref="edition"/>
                <br/><br/>
                <input className="btn btn-warning" type="submit" value="Request" />
                </form>

            </p>
            </div>
            </div>

            );
    }

    

});

module.exports = Request;
