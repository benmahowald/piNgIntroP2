var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require ( 'body-parser' );
var urlencodedParser = bodyParser.urlencoded( { extended: true } );
var connectionString = 
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
app.post( '/testPost', urlencodedParser, function( req, res ){
  console.log( 'in testPost' );

  console.log( 'req.body:', req.body );

  // create an object for response
  var responseObject = {
    text: 'i came from server space'
  }; // end responseObject
  res.send( responseObject );
}); // end testPost

// static folder
app.use( express.static( 'public' ) );
