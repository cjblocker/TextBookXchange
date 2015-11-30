webpackJsonp([1],{

/***/ 0:
/*!****************************!*\
  !*** ./components/main.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactDOM = __webpack_require__(/*! react-dom */ 158);
	var ReactRouter = __webpack_require__(/*! react-router */ 159);
	
	var Router = ReactRouter.Router;
	var Route = ReactRouter.Route;
	var IndexRoute = ReactRouter.IndexRoute;
	
	var App = __webpack_require__(/*! ./app.js */ 208);
	var Home = __webpack_require__(/*! ./home.js */ 211);
	var List = __webpack_require__(/*! ./list.js */ 212);
	var Login = __webpack_require__(/*! ./login.js */ 218);
	var Register = __webpack_require__(/*! ./register.js */ 219);
	var Catalog = __webpack_require__(/*! ./catalog.js */ 220);
	var Request = __webpack_require__(/*! ./request.js */ 221);
	var ListBook = __webpack_require__(/*! ./listbook.js */ 222);
	
	__webpack_require__(/*! ../../~/bootstrap/dist/css/bootstrap.min.css */ 223);
	__webpack_require__(/*! ../css/app.css */ 232);
	
	var routes = React.createElement(
	  Router,
	  null,
	  React.createElement(
	    Route,
	    { name: "app", path: "/", component: App },
	    React.createElement(Route, { name: "catalog", path: "/catalog", handler: Catalog }),
	    React.createElement(Route, { name: "request", path: "/request", handler: Request }),
	    React.createElement(Route, { name: "listbook", path: "/listbook", handler: ListBook }),
	    React.createElement(IndexRoute, { component: Home }),
	    React.createElement(Route, { name: "list", path: "/list", component: List }),
	    React.createElement(Route, { name: "active", path: "/list/active", component: List }),
	    React.createElement(Route, { name: "completed", path: "/list/completed", component: List }),
	    React.createElement(Route, { name: "login", path: "/login", component: Login }),
	    React.createElement(Route, { name: "register", path: "/register", component: Register })
	  )
	);
	
	ReactDOM.render(routes, document.getElementById('content'));

/***/ },

/***/ 158:
/*!*******************************!*\
  !*** ../~/react-dom/index.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(/*! react/lib/ReactDOM */ 3);


/***/ },

/***/ 208:
/*!***************************!*\
  !*** ./components/app.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactRouter = __webpack_require__(/*! react-router */ 159);
	var History = ReactRouter.History;
	
	var auth = __webpack_require__(/*! ./auth.js */ 209);
	var Link = ReactRouter.Link;
	
	// Top-level component for the app
	var App = React.createClass({
	  displayName: "App",
	
	  // mixin for navigation
	  mixins: [History],
	
	  // initial state
	  getInitialState: function () {
	    return {
	      // the user is logged in
	      loggedIn: auth.loggedIn()
	    };
	  },
	
	  // callback when user is logged in
	  setStateOnAuth: function (loggedIn) {
	    this.setState({ loggedIn: loggedIn });
	  },
	
	  // when the component loads, setup the callback
	  componentWillMount: function () {
	    auth.onChange = this.setStateOnAuth;
	  },
	
	  // logout the user and redirect to home page
	  logout: function (event) {
	    auth.logout();
	    this.history.pushState(null, '/');
	  },
	
	  // show the navigation bar
	  // the route handler replaces the RouteHandler element with the current page
	  render: function () {
	    return React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "nav",
	        { className: "navbar navbar-inverse", role: "navigation" },
	        React.createElement(
	          "div",
	          { className: "container" },
	          React.createElement(
	            "div",
	            { className: "navbar-header" },
	            React.createElement(
	              "button",
	              { type: "button", className: "navbar-toggle", "data-toggle": "collapse", "data-target": "#bs-example-navbar-collapse-1" },
	              React.createElement(
	                "span",
	                { className: "sr-only" },
	                "Toggle navigation"
	              ),
	              React.createElement("span", { className: "icon-bar" }),
	              React.createElement("span", { className: "icon-bar" }),
	              React.createElement("span", { className: "icon-bar" })
	            ),
	            React.createElement(
	              "div",
	              null,
	              React.createElement(
	                "a",
	                { className: "navbar-brand", href: "/" },
	                "TextBookXChange"
	              ),
	              React.createElement(
	                Link,
	                { className: "btn btn-warning", to: "login" },
	                "Login"
	              ),
	              React.createElement(
	                Link,
	                { className: "btn btn-warning", to: "register" },
	                "Register"
	              ),
	              React.createElement(
	                Link,
	                { className: "btn btn-warning", to: "catalog" },
	                "Catalog"
	              ),
	              React.createElement(
	                Link,
	                { className: "btn btn-warning", to: "request" },
	                "Request"
	              ),
	              React.createElement(
	                Link,
	                { className: "btn btn-warning", to: "listbook" },
	                "List Book"
	              )
	            )
	          ),
	          React.createElement(
	            "div",
	            { className: "collapse navbar-collapse", id: "bs-example-navbar-collapse-1" },
	            this.state.loggedIn ? React.createElement(
	              "ul",
	              { className: "nav navbar-nav" },
	              React.createElement(
	                "li",
	                null,
	                React.createElement(
	                  "a",
	                  { href: "#/list" },
	                  "All"
	                )
	              ),
	              React.createElement(
	                "li",
	                null,
	                React.createElement(
	                  "a",
	                  { href: "#/list/active" },
	                  "Active"
	                )
	              ),
	              React.createElement(
	                "li",
	                null,
	                React.createElement(
	                  "a",
	                  { href: "#/list/completed" },
	                  "Completed"
	                )
	              ),
	              React.createElement(
	                "li",
	                null,
	                React.createElement(
	                  "a",
	                  { href: "#", onClick: this.logout },
	                  "Logout"
	                )
	              )
	            ) : React.createElement("div", null)
	          )
	        )
	      ),
	      React.createElement(
	        "div",
	        { className: "container" },
	        this.props.children
	      )
	    );
	  }
	});
	
	module.exports = App;

/***/ },

/***/ 209:
/*!****************************!*\
  !*** ./components/auth.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(/*! jquery */ 210);
	
	// authentication object
	var auth = {
	  register: function (name, username, password, cb) {
	    // submit request to server, call the callback when complete
	    var url = "/api/users/register";
	    $.ajax({
	      url: url,
	      dataType: 'json',
	      type: 'POST',
	      data: {
	        name: name,
	        username: username,
	        password: password
	      },
	      // on success, store a login token
	      success: (function (res) {
	        localStorage.token = res.token;
	        localStorage.name = res.name;
	        this.onChange(true);
	        if (cb) cb(true);
	      }).bind(this),
	      error: (function (xhr, status, err) {
	        // if there is an error, remove any login token
	        delete localStorage.token;
	        this.onChange(false);
	        if (cb) cb(false);
	      }).bind(this)
	    });
	  },
	  // login the user
	  login: function (username, password, cb) {
	    // submit login request to server, call callback when complete
	    cb = arguments[arguments.length - 1];
	    // check if token in local storage
	    if (localStorage.token) {
	      this.onChange(true);
	      if (cb) cb(true);
	      return;
	    }
	
	    // submit request to server
	    var url = "/api/users/login";
	    $.ajax({
	      url: url,
	      dataType: 'json',
	      type: 'POST',
	      data: {
	        username: username,
	        password: password
	      },
	      success: (function (res) {
	        // on success, store a login token
	        localStorage.token = res.token;
	        localStorage.name = res.name;
	        this.onChange(true);
	        if (cb) cb(true);
	      }).bind(this),
	      error: (function (xhr, status, err) {
	        // if there is an error, remove any login token
	        delete localStorage.token;
	        this.onChange(false);
	        if (cb) cb(false);
	      }).bind(this)
	    });
	  },
	  // get the token from local storage
	  getToken: function () {
	    return localStorage.token;
	  },
	  // get the name from local storage
	  getName: function () {
	    return localStorage.name;
	  },
	  // logout the user, call the callback when complete
	  logout: function (cb) {
	    delete localStorage.token;
	    this.onChange(false);
	    if (cb) cb();
	  },
	  // check if user is logged in
	  loggedIn: function () {
	    return !!localStorage.token;
	  },
	  // default onChange function
	  onChange: function () {}
	};
	
	module.exports = auth;

/***/ },

/***/ 211:
/*!****************************!*\
  !*** ./components/home.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactRouter = __webpack_require__(/*! react-router */ 159);
	
	var Link = ReactRouter.Link;
	
	// Home page, which shows Login and Register buttons
	var Home = React.createClass({
	  displayName: "Home",
	
	  render: function () {
	    return React.createElement(
	      "p",
	      null,
	      "UNDER CONSTRUCTION"
	    );
	  }
	});
	
	module.exports = Home;

/***/ },

/***/ 212:
/*!****************************!*\
  !*** ./components/list.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactRouter = __webpack_require__(/*! react-router */ 159);
	
	var ListHeader = __webpack_require__(/*! ./listheader.js */ 213);
	var ListEntry = __webpack_require__(/*! ./listentry.js */ 215);
	var ListItems = __webpack_require__(/*! ./listitems.js */ 216);
	
	var api = __webpack_require__(/*! ./api.js */ 214);
	var auth = __webpack_require__(/*! ./auth.js */ 209);
	
	// List page, shows the todo list of items
	var List = React.createClass({
	  displayName: "List",
	
	  // context so the component can access the router
	  contextTypes: {
	    location: React.PropTypes.object
	  },
	
	  // initial state
	  getInitialState: function () {
	    return {
	      // list of items in the todo list
	      items: []
	    };
	  },
	
	  // when the component loads, get the list items
	  componentDidMount: function () {
	    api.getItems(this.listSet);
	  },
	
	  // reload the list of items
	  reload: function () {
	    api.getItems(this.listSet);
	  },
	
	  // callback for getting the list of items, sets the list state
	  listSet: function (status, data) {
	    if (status) {
	      // set the state for the list of items
	      this.setState({
	        items: data.items
	      });
	    } else {
	      // if the API call fails, redirect to the login page
	      this.context.router.transitionTo('/login');
	    }
	  },
	
	  // Show the list of items. This component has the following children: ListHeader, ListEntry and ListItems
	  render: function () {
	    var name = auth.getName();
	    return React.createElement(
	      "section",
	      { id: "todoapp" },
	      React.createElement(ListHeader, { name: name, items: this.state.items, reload: this.reload }),
	      React.createElement(
	        "section",
	        { id: "main" },
	        React.createElement(ListEntry, { reload: this.reload }),
	        React.createElement(ListItems, { items: this.state.items, reload: this.reload })
	      )
	    );
	  }
	});
	
	module.exports = List;

/***/ },

/***/ 213:
/*!**********************************!*\
  !*** ./components/listheader.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	
	var api = __webpack_require__(/*! ./api.js */ 214);
	
	// List header, which shows who the list is for, the number of items in the list, and a button to clear completed items
	var ListHeader = React.createClass({
	  displayName: "ListHeader",
	
	  // handle the clear completed button submit   
	  clearCompleted: function (event) {
	    // loop through the items, and delete any that are complete
	    this.props.items.forEach(function (item) {
	      if (item.completed) {
	        api.deleteItem(item, null);
	      }
	    });
	    // XXX race condition because the API call to delete is async
	    // reload the list
	    this.props.reload();
	  },
	
	  // render the list header
	  render: function () {
	    // true if there are any completed items
	    var completed = this.props.items.filter(function (item) {
	      return item.completed;
	    });
	    return React.createElement(
	      "header",
	      { id: "header" },
	      React.createElement(
	        "div",
	        { className: "row" },
	        React.createElement(
	          "div",
	          { className: "col-md-6" },
	          React.createElement(
	            "p",
	            null,
	            React.createElement(
	              "i",
	              null,
	              "Lovingly created for ",
	              this.props.name
	            )
	          ),
	          React.createElement(
	            "p",
	            null,
	            React.createElement(
	              "span",
	              { id: "list-count", className: "label label-default" },
	              React.createElement(
	                "strong",
	                null,
	                this.props.items.length
	              ),
	              " item(s)"
	            )
	          ),
	          React.createElement(
	            "p",
	            null,
	            React.createElement(
	              "i",
	              null,
	              "Double-click to edit an item"
	            )
	          )
	        ),
	        completed.length > 0 ? React.createElement(
	          "div",
	          { className: "col-md-6 right" },
	          React.createElement(
	            "button",
	            { className: "btn btn-warning btn-md", id: "clear-completed", onClick: this.clearCompleted },
	            "Clear completed (",
	            completed.length,
	            ")"
	          )
	        ) : null
	      )
	    );
	  }
	});
	
	module.exports = ListHeader;

/***/ },

/***/ 214:
/*!***************************!*\
  !*** ./components/api.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(/*! jquery */ 210);
	
	// API object
	var api = {
	  // get the list of items, call the callback when complete
	  getItems: function (cb) {
	    var url = "/api/items";
	    $.ajax({
	      url: url,
	      dataType: 'json',
	      type: 'GET',
	      headers: { 'Authorization': localStorage.token },
	      success: function (res) {
	        if (cb) cb(true, res);
	      },
	      error: function (xhr, status, err) {
	        // if there is an error, remove the login token
	        delete localStorage.token;
	        if (cb) cb(false, status);
	      }
	    });
	  },
	  // add an item, call the callback when complete
	  addItem: function (title, cb) {
	    var url = "/api/items";
	    $.ajax({
	      url: url,
	      contentType: 'application/json',
	      data: JSON.stringify({
	        item: {
	          'title': title
	        }
	      }),
	      type: 'POST',
	      headers: { 'Authorization': localStorage.token },
	      success: function (res) {
	        if (cb) cb(true, res);
	      },
	      error: function (xhr, status, err) {
	        // if there is an error, remove the login token
	        delete localStorage.token;
	        if (cb) cb(false, status);
	      }
	    });
	  },
	  // update an item, call the callback when complete
	  updateItem: function (item, cb) {
	    var url = "/api/items/" + item.id;
	    $.ajax({
	      url: url,
	      contentType: 'application/json',
	      data: JSON.stringify({
	        item: {
	          title: item.title,
	          completed: item.completed
	        }
	      }),
	      type: 'PUT',
	      headers: { 'Authorization': localStorage.token },
	      success: function (res) {
	        if (cb) cb(true, res);
	      },
	      error: function (xhr, status, err) {
	        // if there is any error, remove any login token
	        delete localStorage.token;
	        if (cb) cb(false, status);
	      }
	    });
	  },
	  // delete an item, call the callback when complete
	  deleteItem: function (item, cb) {
	    var url = "/api/items/" + item.id;
	    $.ajax({
	      url: url,
	      type: 'DELETE',
	      headers: { 'Authorization': localStorage.token },
	      success: function (res) {
	        if (cb) cb(true, res);
	      },
	      error: function (xhr, status, err) {
	        // if there is an error, remove any login token
	        delete localStorage.token;
	        if (cb) cb(false, status);
	      }
	    });
	  }
	
	};
	
	module.exports = api;

/***/ },

/***/ 215:
/*!*********************************!*\
  !*** ./components/listentry.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	
	var api = __webpack_require__(/*! ./api.js */ 214);
	
	// List entry component, handles adding new items to the list
	var ListEntry = React.createClass({
	  displayName: "ListEntry",
	
	  // handles submit event for adding a new item
	  addItem: function (event) {
	    // prevent default browser submit
	    event.preventDefault();
	    // get data from form
	    var title = this.refs.title.value;
	    if (!title) {
	      return;
	    }
	    // call API to add item, and reload once added
	    api.addItem(title, this.props.reload);
	    this.refs.title.value = '';
	  },
	
	  // render the item entry area
	  render: function () {
	    return React.createElement(
	      "header",
	      { id: "input" },
	      React.createElement(
	        "form",
	        { id: "item-form", name: "itemForm", onSubmit: this.addItem },
	        React.createElement("input", { type: "text", id: "new-item", ref: "title", placeholder: "Enter a new item", autoFocus: true })
	      )
	    );
	  }
	});
	
	module.exports = ListEntry;

/***/ },

/***/ 216:
/*!*********************************!*\
  !*** ./components/listitems.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactRouter = __webpack_require__(/*! react-router */ 159);
	
	var Item = __webpack_require__(/*! ./item.js */ 217);
	
	// List items component, shows the list of items
	var ListItems = React.createClass({
	  displayName: "ListItems",
	
	  // context so the component can access the router
	  contextTypes: {
	    location: React.PropTypes.object
	  },
	  // render the list of items
	  render: function () {
	    // get list of items to show, using the path to the current page
	    var shown = this.props.items.filter(function (item) {
	      switch (this.context.location.pathname) {
	        case '/list/active':
	          return !item.completed;
	        case '/list/completed':
	          return item.completed;
	        default:
	          return true;
	      }
	    }, this);
	
	    // using the list of items, generate an Item element for each one
	    var list = shown.map((function (item) {
	      return React.createElement(Item, { key: item.id, item: item, reload: this.props.reload });
	    }).bind(this));
	
	    // render the list
	    return React.createElement(
	      "ul",
	      { id: "todo-list" },
	      list
	    );
	  }
	});
	
	module.exports = ListItems;

/***/ },

/***/ 217:
/*!****************************!*\
  !*** ./components/item.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	
	var api = __webpack_require__(/*! ./api.js */ 214);
	
	// Item shown in the todo list
	var Item = React.createClass({
	  displayName: "Item",
	
	  // initial state
	  getInitialState: function () {
	    return {
	      // editing this item
	      editing: false,
	      // text saved before editing started
	      editText: this.props.item.title
	    };
	  },
	  // set the focus and selection range when this item is updated
	  componentDidUpdate: function (prevProps, prevState) {
	    if (!prevState.editing && this.state.editing) {
	      var node = this.refs.editField.getDOMNode();
	      node.focus();
	      node.setSelectionRange(0, node.value.length);
	    }
	  },
	  // when the item is completed, toggle its state and update it
	  toggleCompleted: function () {
	    this.props.item.completed = !this.props.item.completed;
	    api.updateItem(this.props.item, this.props.reload);
	  },
	  // called when the delete button is clicked for this item
	  deleteItem: function () {
	    api.deleteItem(this.props.item, this.props.reload);
	  },
	  // called when the item is double-clicked
	  editItem: function () {
	    this.setState({ editing: true, editText: this.props.item.title });
	  },
	  // called when the item is changed
	  changeItem: function (event) {
	    this.setState({ editText: event.target.value });
	  },
	  // called when the enter key is entered after the item is edited
	  saveItem: function (event) {
	    if (!this.state.editing) {
	      return;
	    }
	    var val = this.state.editText.trim();
	    if (val) {
	      this.setState({ editing: false, editText: val });
	      this.props.item.title = this.state.editText;
	      // save the item
	      api.updateItem(this.props.item, this.props.reload);
	    } else {
	      // delete the item if there is no text left any more
	      api.deleteItem(this.props.item, this.props.reload);
	    }
	  },
	  // called when a key is pressed
	  handleKeyDown: function (event) {
	    var ESCAPE_KEY = 27;
	    var ENTER_KEY = 13;
	    // if the ESC key is pressed, then cancel editing
	    // if the ENTER key is pressed, then save edited text
	    if (event.which === ESCAPE_KEY) {
	      this.setState({ editing: false, editText: this.props.item.title });
	    } else if (event.which === ENTER_KEY) {
	      this.saveItem(event);
	    }
	  },
	  // render the Item
	  render: function () {
	    // construct a list of classes for the item CSS
	    var classes = "";
	    if (this.props.item.completed) {
	      classes += 'completed';
	    }
	    if (this.state.editing) {
	      classes += ' editing';
	    }
	    return React.createElement(
	      "li",
	      { className: classes },
	      React.createElement(
	        "div",
	        { className: "view" },
	        React.createElement("input", { id: this.props.item.id, className: "toggle", type: "checkbox", onChange: this.toggleCompleted.bind(this, this.props.item), checked: this.props.item.completed }),
	        React.createElement("label", { className: "check", htmlFor: this.props.item.id }),
	        React.createElement(
	          "label",
	          { onDoubleClick: this.editItem },
	          this.props.item.title
	        ),
	        React.createElement("button", { className: "destroy", onClick: this.deleteItem })
	      ),
	      React.createElement("input", { ref: "editField", className: "edit", onKeyDown: this.handleKeyDown, onChange: this.changeItem, onSubmit: this.saveItem, onBlur: this.saveItem, value: this.state.editText })
	    );
	  }
	});
	
	module.exports = Item;

/***/ },

/***/ 218:
/*!*****************************!*\
  !*** ./components/login.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactRouter = __webpack_require__(/*! react-router */ 159);
	var History = ReactRouter.History;
	
	var auth = __webpack_require__(/*! ./auth.js */ 209);
	
	// Login page, shows the login form and redirects to the list if login is successful
	var Login = React.createClass({
	  displayName: "Login",
	
	  // mixin for navigation
	  mixins: [History],
	
	  // initial state
	  getInitialState: function () {
	    return {
	      // there was an error on logging in
	      error: false
	    };
	  },
	
	  // handle login button submit
	  login: function (event) {
	    // prevent default browser submit
	    event.preventDefault();
	    // get data from form
	    var username = this.refs.username.value;
	    var password = this.refs.password.value;
	    if (!username || !password) {
	      return;
	    }
	    // login via API
	    auth.login(username, password, (function (loggedIn) {
	      // login callback
	      if (!loggedIn) return this.setState({
	        error: true
	      });
	      this.history.pushState(null, '/list');
	    }).bind(this));
	  },
	
	  // show the login form
	  render: function () {
	    return React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "h2",
	        null,
	        "Login"
	      ),
	      React.createElement(
	        "form",
	        { className: "form-vertical", onSubmit: this.login },
	        React.createElement("input", { type: "text", placeholder: "Username", ref: "username", autoFocus: true }),
	        React.createElement("input", { type: "password", placeholder: "Password", ref: "password" }),
	        React.createElement("input", { className: "btn btn-warning", type: "submit", value: "Login" }),
	        this.state.error ? React.createElement(
	          "div",
	          { className: "alert" },
	          "Invalid username or password."
	        ) : null
	      )
	    );
	  }
	});
	
	module.exports = Login;

/***/ },

/***/ 219:
/*!********************************!*\
  !*** ./components/register.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactRouter = __webpack_require__(/*! react-router */ 159);
	var History = ReactRouter.History;
	
	var auth = __webpack_require__(/*! ./auth.js */ 209);
	
	// Register page, shows the registration form and redirects to the list if login is successful
	var Register = React.createClass({
	  displayName: "Register",
	
	  // mixin for navigation
	  mixins: [History],
	
	  // initial state
	  getInitialState: function () {
	    return {
	      // there was an error registering
	      error: false
	    };
	  },
	
	  // handle regiser button submit
	  register: function (event) {
	    // prevent default browser submit
	    event.preventDefault();
	    // get data from form
	    var name = this.refs.name.value;
	    var username = this.refs.username.value;
	    var password = this.refs.password.value;
	    if (!name || !username || !password) {
	      return;
	    }
	    // register via the API
	    auth.register(name, username, password, (function (loggedIn) {
	      // register callback
	      if (!loggedIn) return this.setState({
	        error: true
	      });
	      this.history.pushState(null, '/list');
	    }).bind(this));
	  },
	
	  // show the registration form
	  render: function () {
	    return React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "h2",
	        null,
	        "Register"
	      ),
	      React.createElement(
	        "form",
	        { className: "form-vertical", onSubmit: this.register },
	        React.createElement("input", { type: "text", placeholder: "Name", ref: "name", autoFocus: true }),
	        React.createElement("input", { type: "text", placeholder: "Username", ref: "username" }),
	        React.createElement("input", { type: "password", placeholder: "Password", ref: "password" }),
	        React.createElement("input", { className: "btn", type: "submit", value: "Register" }),
	        this.state.error ? React.createElement(
	          "div",
	          { className: "alert" },
	          "Invalid username or password."
	        ) : null
	      )
	    );
	  }
	});
	
	module.exports = Register;

/***/ },

/***/ 220:
/*!*******************************!*\
  !*** ./components/catalog.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactRouter = __webpack_require__(/*! react-router */ 159);
	var History = ReactRouter.History;
	
	var Link = ReactRouter.Link;
	
	var Catalog = React.createClass({
	    displayName: "Catalog",
	
	    render: function () {
	        return React.createElement(
	            "div",
	            null,
	            "CATALOG:"
	        );
	    }
	
	});
	
	module.exports = Catalog;

/***/ },

/***/ 221:
/*!*******************************!*\
  !*** ./components/request.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactRouter = __webpack_require__(/*! react-router */ 159);
	
	var Link = ReactRouter.Link;
	
	var Request = React.createClass({
	    displayName: "Request",
	
	    request: function (event) {
	        // prevent default browser submit
	        event.preventDefault();
	        // get data from form
	        var btitle = this.refs.booktitle.getDOMNode().value;
	        var cnumber = this.refs.coursenumber.getDOMNode().value;
	        if (!btitle || !cnumber) {
	            return;
	        }
	        // login via API
	        auth.username(btitle, cnumber, (function (loggedIn) {
	            // login callback
	            if (!loggedIn) return this.setState({
	                error: true
	            });
	            this.context.router.transitionTo('/request');
	        }).bind(this));
	    },
	
	    render: function () {
	        return React.createElement(
	            "div",
	            null,
	            React.createElement(
	                "p",
	                null,
	                React.createElement(
	                    "h2",
	                    null,
	                    " Request a Textbook: "
	                ),
	                React.createElement(
	                    "form",
	                    { className: "form-vertical", onSubmit: this.request },
	                    React.createElement("input", { type: "text", placeholder: "Book Title", ref: "booktitle", autoFocus: true }),
	                    React.createElement("input", { type: "text", placeholder: "Course Number", ref: "coursenumber" }),
	                    React.createElement("input", { type: "text", placeholder: "Edition", ref: "edition" }),
	                    React.createElement("input", { className: "btn btn-warning", type: "submit", value: "Request" })
	                )
	            )
	        );
	    }
	
	});
	
	module.exports = Request;

/***/ },

/***/ 222:
/*!********************************!*\
  !*** ./components/listbook.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactRouter = __webpack_require__(/*! react-router */ 159);
	
	var Link = ReactRouter.Link;
	
	var ListBook = React.createClass({
	    displayName: "ListBook",
	
	    render: function () {
	        return React.createElement(
	            "div",
	            null,
	            React.createElement(
	                "p",
	                null,
	                React.createElement(
	                    "h2",
	                    null,
	                    " List a Textbook: "
	                ),
	                React.createElement(
	                    "form",
	                    { className: "form-vertical", onSubmit: this.request },
	                    React.createElement("input", { type: "text", placeholder: "Book Title", ref: "booktitle", autoFocus: true }),
	                    React.createElement("input", { type: "text", placeholder: "Course Number", ref: "coursenumber" }),
	                    React.createElement("input", { type: "text", placeholder: "Edition", ref: "edition" }),
	                    React.createElement("input", { type: "text", placeholder: "Rent or Sell", ref: "listtype" }),
	                    React.createElement("input", { type: "text", placeholder: "Asking Price", ref: "bookprice" }),
	                    React.createElement("input", { className: "btn btn-warning", type: "submit", value: "Submit" })
	                )
	            )
	        );
	    }
	
	});
	
	module.exports = ListBook;

/***/ },

/***/ 223:
/*!*************************************************!*\
  !*** ../~/bootstrap/dist/css/bootstrap.min.css ***!
  \*************************************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 232:
/*!*********************!*\
  !*** ./css/app.css ***!
  \*********************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=app.js.map