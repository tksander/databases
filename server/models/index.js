var db = require('../db');

module.exports = {
  messages: {
    get: function (end) {
      db.dataGet('message', end)
    }, // a function which produces all the messages
    post: function (message, end) {
      db.databasePost('message', message, end);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (end) {
      db.dataGet('username', end)
    },
    post: function (user, end) {
      db.databasePost('username', user, end);

    }
  }
};

