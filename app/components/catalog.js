var React = require("react");
var ReactRouter = require("react-router");
var History = ReactRouter.History;
var Link = ReactRouter.Link;
var Book = require("./book.js")
var api = require("./api.js");

function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        if(key == 'price'){
          x = parseInt(x);
          y = parseInt(y);
        }
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}
 
var Catalog = React.createClass({
      // mixin for navigation
    mixins: [ History ],

    getInitialState: function() {
    return {
      searchValue: this.props.location.query.q?this.props.location.query.q:"",
      items: [],
      searchpath: this.props.location.query.inc?this.props.location.query.inc:["title"],
      sort: this.props.location.query.sort?this.props.location.query.sort:"title"
      }
    },

    formChange: function(event) {
      this.setState({searchValue: event.target.value});

    },

    sortChange: function(event) {
       this.setState({sort: event.target.value});
       this.history.pushState(null, '/catalog', {
          q: this.state.searchValue,
          inc: this.state.searchpath,
          sort: event.target.value
        });
    },

    includeChange: function(event) {
      var new_inc = this.state.searchpath;
      if(event.target.checked){
        new_inc.push(event.target.value);
      }
      else{
        var inx = new_inc.indexOf(event.target.value);
        if (inx > -1) {
          new_inc.splice(inx, 1);
        };
      }
      this.setState({searchpath: new_inc});
    },

    search: function(event) {
      // prevent default browser submit
      event.preventDefault();
      this.history.pushState(null, '/catalog', {
          q: this.state.searchValue,
          inc: this.state.searchpath,
          sort: this.state.sort
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
  },

  searchFilter: function(bookProps) {
    var searchpath = this.props.location.query.inc?this.props.location.query.inc:["title"];
    if(typeof searchpath == 'string'){
      searchpath = [searchpath];
    };
    if (!this.props.location.query.q) { return true};
    var terms = this.props.location.query.q.toLowerCase().split(' ');
    for (var i = 0; i < searchpath.length; i++) {
      for (var j = 0; j < terms.length; j++) {
        if( bookProps.hasOwnProperty(searchpath[i]) && 
            bookProps[searchpath[i]].toLowerCase().indexOf(terms[j]) > -1){
              return true;
        };
      };
    };
    return false;
  },

  //this.state.items contains items
    render: function() {
         var list = this.state.items.filter(this.searchFilter);
         list = sortByKey(list, this.props.location.query.sort?this.props.location.query.sort:"title").map(function(bookProps){
                return <Book key={bookProps.id} {...bookProps}/>
            });
        return (
            <div className='content'>
             <h2> TextBook Catalog: </h2>
               <form role="search">
                  <div className="form-group" className='center'>
                    <input type="text" value={this.state.searchValue} onChange={this.formChange} className="form-control" placeholder="Search for a Textbook here" style={{width:'60%',display:'inline', borderRadius: '10px 0 0 10px', fontStyle:'italic'}} />
                  <button type="submit" className="btn search-btn" onClick={this.search} style={{display:'inline'}}>Submit</button>
                    <div style={{display:'inline-block', verticalAlign:'bottom', 'paddingLeft':'5px'}}>
                      <div>
                        <span> Sort by: 
                        <select value={this.state.sort} multiple={false} onChange={this.sortChange}>
                          <option type="radio" name="sort" value="price" defaultChecked> Price </option>
                          <option type="radio" name="sort" value="title"> Title </option>
                          <option type="radio" name="sort" value="author"> Author </option>
                          <option type="radio" name="sort" value="date"> Newest </option>
                          </select>
                          </span>
                      </div>
                      <div>
                        <span> Search Fields:
                          <input type="checkbox" checked={this.state.searchpath.indexOf("title") > -1} name="title" value="title" onChange={this.includeChange} /> Title 
                          <input type="checkbox" checked={this.state.searchpath.indexOf("author") > -1} name="author" value="author" onChange={this.includeChange} /> Author 
                          <input type="checkbox" checked={this.state.searchpath.indexOf("courseNumber") > -1} name="course" value="courseNumber" onChange={this.includeChange} /> Course
                        </span>
                      </div>
                    </div>
                  </div>
              </form>
                {this.props.location.query.q?(<h3>Displaying Results for {this.props.location.query.q}</h3>):""}
                <br/>
                {list}
            </div>
            );
    }

});

module.exports = Catalog;
