var React = require("react");
var ReactRouter = require("react-router");
var api = require("./api.js");
var Link = ReactRouter.Link;


var ListBook = React.createClass({

    addBook: function(event) {
        event.preventDefault();

        var title = this.refs.booktitle;
        var courseNumber = this.refs.coursenumber;
        var edition = this.refs.edition;
        var list_type = this.refs.listtype;
        var price = this.refs.bookprice;

        if(!title || !courseNumber || !edition || !list_type || !price) {
            return;
        }

        api.addBook(title, courseNumber, edition, list_type, price, this.props.reload);
        this.refs.title.value = '';
        this.refs.courseNumber.value = '';
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
                <input type="text" placeholder="Book Title" ref="booktitle" autoFocus={true} />
                <br/><br/>
                <input type="text" placeholder="Course Number" ref="coursenumber"/>
                <br/><br/>
                <input type="text" placeholder="Edition" ref="edition"/>
                <br/><br/>
                <input type="text" placeholder="Rent or Sell" ref="listtype"/>
                <br/><br/>
                <input type="text" placeholder="Asking Price" ref="bookprice"/>
                <br/><br/>
                <input className="btn btn-warning" type="submit" value="Submit" />
                </form>

                </div>
            </div>

            );
}


});

module.exports = ListBook;
