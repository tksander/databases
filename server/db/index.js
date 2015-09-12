var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

//NOTE TO SELF: YOU DID THIS WRONG

exports.databasePost = function(table, string, end) {
  var dbConnection = mysql.createConnection({
    user: "root",
    password: "",
    database: "chat"
  });

  dbConnection.connect();

  if(table === 'username') {
    var field = [table, 'user', string];
  } else if(table === 'message') {
    var field = [table, 'messages', string];
  } else if(table === 'roomname') {
    var field = [table, 'room', string];
  }

  var string = 'INSERT INTO '+ field[0] + ' (' + field[1] + ') value ("'+ field[2] +'");';
  console.log(string);
  dbConnection.query(string, function(err, results) {
    if(err) {
      throw err;
    }
    dbConnection.query('select * from message;', function(err, results) {
      console.log(results)
      dbConnection.end(); 
      end();
    })

  });
};


