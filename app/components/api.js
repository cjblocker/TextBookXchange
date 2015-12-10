var $ = require("jquery");

// API object
var api = {
 

  getRequests: function(cb) {
    var url = "/api/requests";
    $.ajax({
      url: url,
      dataType: 'json',
      type: 'GET',
      headers: {'Authorization' : localStorage.token},
      
      success: function(res) {
        if(cb)
          cb(true, res);
      },
      error: function(xhr, status, err) {
        delete localStorage.token;
        if (cb)
          cb(false, status);
      }      

    });
  },

  getBooks: function(cb) {
    var url = "/api/books";
    $.ajax({
      url: url,
      dataType: 'json',
      type: 'GET',
      headers: {'Authorization': localStorage.token,
          'UserBooks' : '0'},

      success: function(res) {
        if(cb)
          cb(true, res);
      },
      error: function(xhr, status, err) {
        delete localStorage.token;
        if (cb)
          cb(false, status);
      }
    });
  },



  getUserBooks: function(cb) {
    var url = "/api/books";
    $.ajax({
      url: url,
      dataType: 'json',
      type: 'GET',
      headers: {'Authorization': localStorage.token,
            'UserBooks': '1'},
      success: function(res) {
        if(cb)
          cb(true, res);
      },
      error: function(xhr, status, err) {
        delete localStorage.token;
        if (cb)
          cb(false, status);
      }   
    });
  },
  
  searchBooks: function(searchValue, cb) {
    var url = "/api/books";
    $.ajax({
      url: url,
      dataType: 'json',
      type: 'GET',
      headers: {'Authorization': localStorage.token,
            'UserBooks': '2',
            'searchvalue': searchValue},
      success: function(res) {
        if(cb)
          cb(true, res);
      },
      error: function(xhr, status, err) {
        delete localStorage.token;
        if (cb)
          cb(false, status);
      }   
    });
  },

  addRequest: function(title,course, cb) {  
    var url = "/api/requests";
    $.ajax({
      url: url,
      contentType: 'application/json',
      data: JSON.stringify({
        item: {
          'title': title,
          'course': course
        }
      }),
      type: 'POST',
      headers: {'Authorization': localStorage.token},
      success: function(res) {
        if (cb)
          cb(true, res);

      },
      error: function(xhr, status, err) {
        // if there is an error, remove the login token
        delete localStorage.token;
        if (cb)
          cb(false, status);
      }
    });

  },

  addBook: function(title, courseNumber, edition, author, list_type, price, notes, cb)
  {
    var url = "/api/books";
    $.ajax({
      url: url,
      contentType: 'application/json',
      data: JSON.stringify({
        item: {
          'title' : title,
          'courseNumber' : courseNumber,
          'edition' : edition,
          'author' : author,
          'list_type' : list_type,
          'price' : price,
          'notes' : notes
        }
      }),
      type: 'POST',
      headers: {'Authorization': localStorage.token},
      success: function(res) {
        if (cb)
          cb(true, res);
      },
      error: function(xhr, status, err) {
        // if there is an error, remove the login token
        delete localStorage.token;
        if (cb)
          cb(false, status);
      }
    });
  },

  updateBook: function(item, title, courseNumber, edition, author, list_type, price, notes, cb) {
    var url = "/api/books" ;
    $.ajax({
      url: url,
      contentType: 'application/json',
      data: JSON.stringify({
        item: {
          'title' : title,
          'courseNumber' : courseNumber,
          'edition' : edition,
          'author' : author,
          'list_type' : list_type,
          'price' : price,
          'notes' : notes
        }
      }),
      type: 'PUT',
      headers: {'Authorization': localStorage.token},
      success: function(res) {
        if (cb)
          cb(true, res);
      },
      error: function(xhr, status, err) {
        // if there is any error, remove any login token
        delete localStorage.token;
        if (cb)
          cb(false, status);
      }
    });
  },


  deleteBook: function(item, cb) {
    var url = "/api/books/" + item.id;
       $.ajax({
      url: url,
      type: 'DELETE',
      headers: {'Authorization': localStorage.token},
      success: function(res) {
        if (cb)
          cb(true, res);
      },
      error: function(xhr, status, err) {
        // if there is an error, remove any login token
        delete localStorage.token;
        if (cb)
          cb(false, status);
      }
    });
  },



deleteRequest: function(item, cb) {
    var url = "/api/requests/" + item.id;
       $.ajax({
      url: url,
      type: 'DELETE',
      headers: {'Authorization': localStorage.token},
      success: function(res) {
        if (cb)
          cb(true, res);
      },
      error: function(xhr, status, err) {
        // if there is an error, remove any login token
        delete localStorage.token;
        if (cb)
          cb(false, status);
      }
    });
  }

};

module.exports = api;
