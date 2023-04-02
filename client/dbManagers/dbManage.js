const sqlite3 = require('sqlite3').verbose();

//sql db stuff
//then close it to prevent mem leks and stuff
let db = new sqlite3.Database(':memory:', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});
