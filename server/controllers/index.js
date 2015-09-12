var models = require('../models');
var fs = require('fs');

var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept , x-requested-with, x-http-method-override",
  "access-control-max-age": 10, // Seconds.
  "access-control-allow-credentials": false,
  "Content-Type": "text/html"
};

module.exports = {
  messages: {
    get: function (req, res) {
      fs.readFile("../client/index.html", function(err, data) {
        if(err) {
          res.writeHead(404, headers);
          res.end();
        } else {
          res.writeHead(200, headers);
          res.end(data);
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log("get users")
    },
    post: function (req, res) {
    }
  }
};

