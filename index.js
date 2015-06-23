
var express  = require('express'),
    swig     = require('swig'),
    routes   = require('./routes.js'), //I wrote the routes' functionality in a separate file
    http     = require('http'),
    realtime = require('./my_modules/realtime'),//Here, I wrote the socket.io functionality
    port     = 8080;

/**
 * The express module returns a request handler
 */
var app = express();

/**
 * socket.io requires an http.Server instance to operate
 */
var server = http.createServer(app);

//Configuring swig
swig.setDefaults({cache: false});
//Setting the template engine. The second parameter is the render function.
app.engine('html', swig.renderFile);
//Serving static files
app.use(express.static('public'));
//Setting the app's routes
routes(app);
//Setting the server to the socket.io module
realtime(server);

/**
 * [Copy-Paste from a boilerplate project I wrote a few months ago]:
 *
 * You can put the object app to listen too, but if you do that, the server will not serve the file
 * socket.io/socket.io.js. It's not necessary to add the second parameter, because the request handler have been
 * setted when the server object was instanciated. Moreover, if we do that, the express routes wil not work.
 */
server.listen(port);