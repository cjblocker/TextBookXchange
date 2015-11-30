var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
  render: function() {
    return <nav className="navbar navbar-inverse navbar-fixed-top" style={{width:1000}}>
        <div className="container-fluid">

        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">TextBookXchange</a>
        </div>


        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          
          <ul className="nav navbar-nav">
          </ul>
          
          
          <ul className="nav navbar-nav navbar-right">
              <li><Link className="btn btn-warning" to="login">Login</Link></li>
             <li><Link className="btn btn-warning" to="register">Register</Link></li>
             <li><Link className="btn btn-warning" to="catalog">Catalog</Link></li>
             <li><Link className="btn btn-warning" to="request">Request</Link></li>
             <li><Link className="btn btn-warning" to="listbook">List Book</Link></li>
            {this.props.loggedIn ? ([
                   <li><a className="btn btn-warning"href="#/list">All</a></li>,
                   <li><a className="btn btn-warning" href="#/list/active">Active</a></li>,
                   <li><a className="btn btn-warning" href="#/list/completed">Completed</a></li>,
                   <li><a className="btn btn-warning" href="#" onClick={this.logout}>Logout</a></li>
                   ]
               ) : (<div></div>)}
          </ul>
        </div>
      </div>
    </nav>
  }
});