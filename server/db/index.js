var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


exports.databasePost = function(table, string, end) {
  var dbConnection = mysql.createConnection({
    user: "root",
    password: "",
    database: "chat"
  });

  dbConnection.connect();

  if(table === 'username') {
    var field = [table, 'user', string];
    var string = 'INSERT INTO '+ field[0] + ' (' + field[1] + ') value ("'+ field[2] +'");';
    dbConnection.query(string, function(err) {
      dbConnection.end(); 
      end();
    });

  } else if(table === 'message') {
    var field = ['message', 'messages', string[0]];
    var field1 = ['roomname', 'room', string[1]];
    var string = 'INSERT INTO '+ field[0] + ' (' + field[1] + ') value ("'+ field[2] +'");';
    var string2 = 'INSERT INTO '+ field1[0] + ' (' + field1[1] + ') value ("'+ field1[2] +'");';
    dbConnection.query(string, function(err) {
      dbConnection.query(string2, function(err) {

        dbConnection.end(); 
        end();
      })
    });
  }

};

exports.dataGet = function(table, end) {
  var dbConnection = mysql.createConnection({
    user: "root",
    password: "",
    database: "chat"
  });
  dbConnection.connect();


  if(table === 'username') {
    var field = [table, 'user'];
  } else if(table === 'message') {
    var field = [table, 'messages'];
  }
  var string = 'SELECT * FROM ' + field[0] + ';';
  dbConnection.query(string, function(err, results) {
    if(err) {
      throw err;
    }
    dbConnection.end(); 
    end(JSON.stringify(results));
  });
}

