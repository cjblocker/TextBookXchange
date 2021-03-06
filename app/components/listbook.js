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
        var author = this.refs.author.value;
        var list_type = this.refs.list_type.value;
        var price = this.refs.price.value;
        var notes = this.refs.notes.value;
        if(!title || !courseNumber || !edition || !list_type || !price || !author) {
            return;
        }

        api.addBook(title, courseNumber, edition, author, list_type, price, notes, function(loggedIn) {
      // login callback

      if (!loggedIn)
        this.history.pushState(null, '/login');
      else
        this.history.pushState(null, '/dashboard');
    }.bind(this));

        this.refs.title.value = '';
        this.refs.coursenumber.value = '';
        this.refs.edition.value = '';
        this.refs.author.value = '';
        this.refs.list_type.value = 'Sell';
        this.refs.price.value = '';
        this.refs.notes.value = '';
    },

    render: function() {
        return (
            <div className='content'>
                <div className='center' style={{width:500}}>
          
                <h2> List a Textbook: </h2>
                <form className="form-vertical" onSubmit={this.addBook}>
                <input type="text" style = {{width:500}} placeholder="Book Title" ref="title" autoFocus={true} />
                <br/><br/>
                <input type="text" style = {{width:500}}placeholder="Course Number" ref="coursenumber"/>
                <br/><br/>
                <input type="text" style = {{width:500}}placeholder="Edition" ref="edition"/>
                <br/><br/>
                <input type="text" style = {{width:500}}placeholder="Author" ref="author"/>
                <br/><br/>
                <select multiple={false} ref='list_type' style = {{width:500, height: 28}}>
                    <option type="text" value='Sell'>Sell</option>
                    <option type="text" value='Rent'>Rent</option>
                </select>
                <br/><br/>
                <input type="text" style = {{width:500}}placeholder="Asking Price" ref="price"/>
                <br/><br/>
                <textarea style = {{width:500, maxWidth:500}} placeholder="Notes" ref="notes"/>
                <br/><br/>
                <input className="btn btn-warning" type="submit" value="Submit" />
                </form>

                </div>
            </div>

            );
}


});

module.exports = ListBook;
