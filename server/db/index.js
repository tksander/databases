var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var queryFunc = function(string) {
  return new Promise(function(resolve, reject) {
    dbConnection.query(string, function(err) {
      if(err) {
        reject(err);
      } 
    });
  });
};

exports.databasePost = function(table, string) {
  var dbConnection = mysql.createConnection({
    user: "root",
    password: "",
    database: "chat"
  });

  dbConnection.connect();

    if(table === 'username') {
      var sqlString = 'INSERT INTO '+ table + "(user) values (" + string + ")";
    } else if(table === 'message') {
      var sqlString = 'INSERT INTO '+ table + "(messages) values (" + string+ ")";
    } else if(table === 'roomname') {
      var sqlString = 'INSERT INTO '+ table + "(room) values (" + string + ")";
    }
    queryFunc(sqlString).finally(function() {
      dbConnection.end();
    });


};


