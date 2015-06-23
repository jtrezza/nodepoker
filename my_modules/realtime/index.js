'use strict'

var socketio = require('socket.io');

/**
 * Attach socket.io to a server an manage the socket events
 * @param server http.Server instance
 */
module.exports = function(server){

    var io = socketio(server);

    io.on('connection', onConnection);

    function onConnection(socket){

        console.log('User connected: '+socket.id);

        socket.on('disconnect', function(){
            console.log('User disconnected: '+socket.id);
        });
    };
};