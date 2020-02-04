var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'kty',
  password : 'wmf1284546',
//   database : 'fintechExam',
  port :"3306"
});
 
connection.connect();
 var r;
connection.query('SELECT * FROM fintechExam.user', function (error, results, fields) {
  if (error) throw error;
  r= results;
  console.log('The solution is: ', results[0].id);
});
connection.end();
