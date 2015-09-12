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
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      if(req.body.message) {
        models.messages.post(req.body.message, end);
      }
      function end() {
        res.writeHead(201, headers);
        res.end();
      }
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
    },
    post: function (req, res) {
      if(req.body.message) {
        models.users.post(req.body.username);
      }
      res.writeHead(201, headers);
      res.end();
    }
  }
};

