CREATE DATABASE chat;

USE chat;

CREATE TABLE roomname (
  room_id INT NOT NULL AUTO_INCREMENT,
  room varchar(255),
  PRIMARY KEY (room_id),
  UNIQUE (room)
);

CREATE TABLE username (
  user_id INT NOT NULL AUTO_INCREMENT,
  user varchar(255),
  room_id int,
  PRIMARY KEY (user_id),
  UNIQUE (user, room_id), 
  FOREIGN KEY (room_id) references roomname(room_id)
);


CREATE TABLE message (
  /* Describe your table here.*/
  message_id INT NOT NULL AUTO_INCREMENT,
  messages varchar(255),
  user_id int,
  room_id int,
  PRIMARY KEY (message_id),
  FOREIGN KEY (user_id) references username(user_id),
  FOREIGN KEY (room_id) references roomname(room_id)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

