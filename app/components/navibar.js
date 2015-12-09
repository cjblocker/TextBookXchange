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
          <Link className="navbar-brand" to="">TextBook<span style={{fontSize: 'larger'}}>X</span>change</Link>
        </div>


        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          
          <ul className="nav navbar-nav">
          </ul>
          
          <ul className="nav navbar-nav navbar-right">
              <li><Link className="btn" activeClassName="btn" to="catalog">Catalog</Link></li>

            {this.props.loggedIn ? ([
                   <li key='request'><Link className="btn" activeClassName="btn" to="request">Request</Link></li>,
                   <li key='list'><Link className="btn" activeClassName="btn" to="listbook">List Book</Link></li>,
                   <li key='dashboard'><Link className="btn" activeClassName="btn" to="dashboard">Dashboard</Link></li>,
                   <li key='logout'><Link className="btn" activeClassName="btn" to="" onClick={this.props.logout}>Logout</Link></li>
                   ]
               ) : ([
              <li key='login'><Link className="btn" activeClassName="btn" to="login">Login</Link></li>,
              <li key='register'><Link className="btn" activeClassName="btn" to="register">Register</Link></li>
              ])}
          </ul>
        </div>
      </div>
    </nav>
  }
});