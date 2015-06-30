'use strict'

var socketio    = require('socket.io'),
    table       = require('../../entities/table.js'),
    player      = require('../../entities/player.js'),
    deck        = require('../../entities/deck.js'),
    game        = require('../../entities/game.js'),
    EventEmitter = require("events").EventEmitter,
    unnamedPlayersCount = 0,
    pokerTable = Object.create(table);

var ee = new EventEmitter();

/**
 * Attach socket.io to a server an manage the socket events
 * @param server http.Server instance
 */
module.exports = function(server){

    var io = socketio(server);

    io.on('connection', onConnection);

    function onConnection(socket){
        console.log('User connected: '+socket.id);

        if(pokerTable.acceptsNewPlayers()){
            socket.emit('choose_username', '');
        }else{
            socket.emit('table_full', 'The table is full. Please wait until some player leaves.');
        }

        socket.on('username_chosen', function(username){
            username = (username === "Unnamed") ? (username + " " + ++unnamedPlayersCount) : username;
            var newPlayer = Object.create(player, {username: {value: username, enumerable: true}});

            ee.emit('new_player_ready', newPlayer);
        });

        ee.on('new_player_ready', function(player){
            if(pokerTable.acceptsNewPlayers()){
                pokerTable.addPlayer(newPlayer);

                if(pokerTable.atLeastTwoPlayers()){
                    //TODO: Crear método startGame en table. Que reparta cartas, asigne ciegas, y probar
                    //a enviarle el socket, a ver si puede enviar los eventos desde allá.
                    //TODO: Como segunda opción, probar a enviarle callbacks que estén aquí como parámetro.
                    pokerTable.startGame(Object.create(deck), Object.create(game));
                }
            }else{
                socket.emit('table_full', 'The table was filled while you was choosing your username.');
            }
        });

        socket.on('disconnect', function(){
            console.log('User disconnected: '+socket.id);
        });
    };
};