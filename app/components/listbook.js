var React = require("react");
var ReactRouter = require("react-router");
var api = require("./api.js");
var Link = ReactRouter.Link;
var History = ReactRouter.History;


var ListBook = React.createClass({

    contextTypes: {
        location: React.PropTypes.object
    },

    mixins: [ History ],

    addBook: function(event) {
        event.preventDefault();

        var title = this.refs.title.value;
        var courseNumber = this.refs.coursenumber.value;
        var edition = this.refs.edition.value;
        var list_type = this.refs.list_type.value;
        var price = this.refs.price.value;

        if(!title || !courseNumber || !edition || !list_type || !price) {
            return;
        }

        api.addBook(title, courseNumber, edition, list_type, price, function(loggedIn) {
      // login callback
      if (!loggedIn)
        this.context.router.transitionTo('/login');
      else
        this.history.pushState(null, '/');
    }.bind(this));
        this.refs.title.value = '';
        this.refs.coursenumber.value = '';
        this.refs.edition.value = '';
        this.refs.list_type.value = '';
        this.refs.price.value = '';
    },

    render: function() {
        return (
            <div className='content'>
                <div className='center' style={{width:300}}>
          
                <h2> List a Textbook: </h2>
                <form className="form-vertical" onSubmit={this.addBook}>
                <input type="text" placeholder="Book Title" ref="title" autoFocus={true} />
                <br/><br/>
                <input type="text" placeholder="Course Number" ref="coursenumber"/>
                <br/><br/>
                <input type="text" placeholder="Edition" ref="edition"/>
                <br/><br/>
                <input type="text" placeholder="Rent or Sell" ref="list_type"/>
                <br/><br/>
                <input type="text" placeholder="Asking Price" ref="price"/>
                <br/><br/>
                <input className="btn btn-warning" type="submit" value="Submit" />
                </form>

                </div>
            </div>

            );
}


});

module.exports = ListBook;
