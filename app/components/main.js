var React = require("react");
var ReactDOM = require('react-dom');
var ReactRouter = require("react-router");

var HashHistory = require('history/lib/createBrowserHistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var App = require("./app.js");
var Home = require("./home.js");
var Login = require("./login.js");
var Register = require("./register.js");
var Catalog = require("./catalog.js");
var Request = require("./request.js");
var ListBook = require("./listbook.js");
var Contact = require("./contact");
var Dashboard = require("./dashboard");
require("../../node_modules/bootstrap/dist/css/bootstrap.min.css");
require("../css/app.css");
require("../favicon.ico");
require("../favicon.png");

var routes = (
  <Router history={HashHistory()}>
    <Route name="app" path="/" component ={App}>
      <Route name="catalog" path ="/catalog" component ={Catalog}/>
      <Route name="request" path ="/request" component ={Request}/>
      <Route name="listbook" path ="/listbook" component ={ListBook}/>
      <IndexRoute component = {Home} />
      <Route name="login" path="/login" component={Login} />
      <Route name="register" path="/register" component={Register} />
      <Route name='contact' path="contact" component={Contact} />
      <Route name='dashboard' path="dashboard" component={Dashboard} />
    </Route>
  </Router>
);

ReactDOM.render(routes, document.getElementById('target'));
