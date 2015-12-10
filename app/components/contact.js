var React = require("react");
var ReactRouter = require("react-router");
var History = ReactRouter.History;
var brian_img = require("../img/brianwatson.png");

var Contact = React.createClass({
  // mixin for navigation
  mixins: [ History ],

  // show the login form
  render: function() {
    return (
      <div className='content'>
      <div className='center' style={{width:480}}>
        <h2>Contact Us</h2>
         <div style={{display:"inline"}}>
          <div className="contact">
            <div className="circleImage" style={{backgroundImage: 'url(https://cdn.hackaday.io/images/resize/600x600/3360931415733128897.jpg)'}}></div>
            <h3>Cameron Blocker</h3>
            <p>cameronjblocker@gmail.com</p>
          </div>
          <div className="contact">
            <div className="circleImage" style={{backgroundImage: 'url('+brian_img+')'}}></div>
                       <h3>Brian Watson</h3>
            <p>brianlwatson@gmail.com</p>
          </div>
         </div>
      </div>
      </div>
    );
  }
});

module.exports = Contact;
