var app = require('./express.js');
var User = require('./user.js');
var Item = require('./item.js');
var textBook = require('./textbook.js');

const path = require('path');
// setup body parser
var bodyParser = require('body-parser');
var request = require('./request.js');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//
// API
//

// register a user
app.post('/api/users/register', function (req, res) {
  // find or create the user with the given username
  User.findOrCreate({username: req.body.username}, function(err, user, created) {
    if (created) {
      // if this username is not taken, then create a user record
      user.name = req.body.name;
      user.set_password(req.body.password);
      user.email = req.body.email;
      user.save(function(err) {
	if (err) {
	  res.sendStatus("403");
	  return;
	}
        // create a token
	var token = User.generateToken(user.username);
        // return value is JSON containing the user's name and token
        res.json({name: user.name, token: token});
      });
    } else {
      // return an error if the username is taken
      res.sendStatus("403");
    }
  });
});

// login a user
app.post('/api/users/login', function (req, res) {
  // find the user with the given username
  User.findOne({username: req.body.username}, function(err,user) {
    if (err) {
      res.sendStatus(403);
      return;
    }
    // validate the user exists and the password is correct
    if (user && user.checkPassword(req.body.password)) {
      // create a token
      var token = User.generateToken(user.username);
      // return value is JSON containing user's name and token
      res.json({name: user.name, token: token});
    } else {
      res.sendStatus(403);
    }
  });
});

// get all items for the user
app.get('/api/items', function (req,res) {
  // validate the supplied token
  user = User.verifyToken(req.headers.authorization, function(user) {
    if (user) {
      // if the token is valid, find all the user's items and return them
      Item.find({user:user.id}, function(err, items) {
	if (err) {
	  res.sendStatus(403);
	  return;
	}
	// return value is the list of items as JSON
	res.json({items: items});
      });
    } else {
      res.sendStatus(403);
    }
  });
});

//get requests
app.get('/api/requests', function (req,res) {
  // validate the supplied token
  user = User.verifyToken(req.headers.authorization, function(user) {
    if (user) {
      // if the token is valid, find all the user's items and return them
      request.find({user:user.name}, function(err, items) {
  if (err) {
    res.sendStatus(403);
    return;
  }
  // return value is the list of items as JSON

  res.json({items: items});
      });
    } else {
      res.sendStatus(403);
    }
  });
});

// get all textbooks for the user
app.get('/api/books', function (req,res) {
  user = User.verifyToken(req.headers.authorization, function(user) {
    if (user) {
      if(req.headers.userbooks == '1')
      {
          textBook.find({user:user.username}, function(err, items) {
          if (err) {
            res.sendStatus(403);
            return;
          }
          // return value is the list of items as JSON
          res.json({items: items});
              });
      }

      else if(req.headers.userbooks == '2')
      {
        textBook.find({title:req.headers.searchvalue}, function(err, items) {
          if (err) {
            res.sendStatus(403);
            return;
          }
          // return value is the list of items as JSON
              //items found here.
          res.json({items: items});
              });
      }

      else {
         //   if the token is valid, find all the user's items and return them
            textBook.find({}, function(err, items) {
            if (err) {
              res.sendStatus(403);
              return;
            }
            // return value is the list of items as JSON
            res.json({items: items});
                });
      } 
  } 
  else {
      res.sendStatus(403);
    }
  });
});


// add an item
app.post('/api/items', function (req,res) {
  // validate the supplied token
  // get indexes
  user = User.verifyToken(req.headers.authorization, function(user) {
    if (user) {
      // if the token is valid, create the item for the user
      Item.create({title:req.body.item.title,completed:false,user:user.id}, function(err,item) {
	if (err) {
	  res.sendStatus(403);
	  return;
	}
	res.json({item:item});
      });
    } else {
      res.sendStatus(403);
    }
  });
});

//add a book
app.post('/api/books', function (req,res){
user = User.verifyToken(req.headers.authorization, function(user) {
    if (user) {
      // if the token is valid, create the item for the user
      textBook.create({
          title:req.body.item.title,
          courseNumber:req.body.item.courseNumber,
          edition:req.body.item.edition,
          list_type:req.body.item.list_type,
          price:req.body.item.price,
          author:req.body.item.author,
          notes:req.body.item.notes,
          user:user.name,
          userEmail: user.email 
      },
       function(err,item) {
  if (err) {
    res.sendStatus(403);
    return;
  }
  res.json({item:item});
      });
    } else {
      res.sendStatus(403);
    }
  });
});

//create a request
app.post('/api/requests', function (req,res) {
 user = User.verifyToken(req.headers.authorization, function(user) {
    if (user) {
      // if the token is valid, create the item for the user
      request.create({
          title:req.body.item.title,
          course:req.body.item.course,
          user:user.name,
      },
       function(err,item) {
  if (err) {
    res.sendStatus(403);
    return;
  }
  res.json({item:item});
      });
    } else {
      res.sendStatus(403);
    }
  });
});

// get an item
app.get('/api/items/:item_id', function (req,res) {
  // validate the supplied token
  user = User.verifyToken(req.headers.authorization, function(user) {
    if (user) {
      // if the token is valid, then find the requested item
      Item.findById(req.params.item_id, function(err, item) {
	if (err) {
	  res.sendStatus(403);
	  return;
	}
        // get the item if it belongs to the user, otherwise return an error
        if (item.user != user) {
          res.sendStatus(403);
	  return;
        }
        // return value is the item as JSON
        res.json({item:item});
      });
    } else {
      res.sendStatus(403);
    }
  });
});

// get a book by course number
app.get('/api/books/:item_id', function (req,res) {
  // validate the supplied token
  user = User.verifyToken(req.headers.authorization, function(user) {
    if (user) {
      // if the token is valid, then find the requested book by course Number
      textBook.find(req.params.courseNumber, function(err, item) {
  if (err) {
    res.sendStatus(403);
    return;
  }
        if (item.user != user) {
          res.sendStatus(403);
    return;
        }
        res.json({item:item});
      });
    } else {
      res.sendStatus(403);
    }
  });
});




// delete a book
app.delete('/api/books/:item_id', function (req,res) {
  // validate the supplied token
  user = User.verifyToken(req.headers.authorization, function(user) {
    if (user) {
      // if the token is valid, then find the requested item
      textBook.findByIdAndRemove(req.params.item_id, function(err,item) {
  if (err) {
    res.sendStatus(403);
    return;
  }
        res.sendStatus(200);
      });
    } else {
      res.sendStatus(403);
    }
  });
});

app.delete('/api/requests/:item_id', function (req,res) {
  // validate the supplied token
  user = User.verifyToken(req.headers.authorization, function(user) {
    if (user) {
      // if the token is valid, then find the requested item
      request.findByIdAndRemove(req.params.item_id, function(err,item) {
  if (err) {
    res.sendStatus(403);
    return;
  }
        res.sendStatus(200);
      });
    } else {
      res.sendStatus(403);
    }
  });
});

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
  response.sendFile(path.resolve('', 'public', 'index.html'))
})
