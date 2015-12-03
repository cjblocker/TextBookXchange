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
          <a className="navbar-brand" href="#">TextBook<span style={{fontSize: 'larger'}}>X</span>change</a>
        </div>


        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          
          <ul className="nav navbar-nav">
          </ul>
          
          <ul className="nav navbar-nav navbar-right">
              <li><Link className="btn" to="catalog">Catalog</Link></li>

            {this.props.loggedIn ? ([
                   <li key='request'><a className="btn" href="#/request">Request</a></li>,
                   <li key='list'><a className="btn" href="#/listbook">List Book</a></li>,
                   <li key='logout'><a className="btn" href="#" onClick={this.props.logout}>Logout</a></li>
                   ]
               ) : ([
              <li key='login'><Link className="btn" to="login">Login</Link></li>,
              <li key='register'><Link className="btn" to="register">Register</Link></li>
              ])}
          </ul>
        </div>
      </div>
    </nav>
  }
});