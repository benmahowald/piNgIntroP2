var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require ( 'body-parser' );
var pg = require('pg');
var urlencodedParser = bodyParser.urlencoded( { extended: true } );
var connectionString = process.env.DATABASE_URL || 'postgres:localhost:5432/test';
var port = process.env.PORT || 3000;
app.use( bodyParser.json() );
//spin up server
app.listen( port, function(){
  console.log( 'server up on', port );
}); // end server up

// base url
app.get( '/', function( req, res ){
  console.log( 'base url hit' );
  res.sendFile( path.resolve( 'public/index.html' ) );
}); // end base url

// test post route
app.post('/testPost', urlencodedParser, function (req, res) {
  console.log('req.body:', req.body);
  var data = req.body;
  pg.connect(connectionString, function (err, client, done) {
    if (err) {
      console.log('DB ERROR');
    }

    var query = client.query('INSERT INTO info (name, email, comment) VALUES ($1, $2, $3)', [data.name, data.email, data.comment]);

    var listOfInfo = [];
    query.on('row', function (row) {
      listOfInfo.push(row);

    }); // end query on row

    query.on('end', function () {
      done();
      res.send(listOfInfo);
    }); // end query on end
  }); // end pg connect
}); // end testPost

// static folder
app.use( express.static( 'public' ) );
