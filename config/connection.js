// my connection to the database
const { connect, connection } = require('mongoose');
// putting in the connection string and the name of the database
connect('mongodb://127.0.0.1:27017/socialDB');

module.exports = connection;
