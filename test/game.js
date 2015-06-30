
var test = require('tape'),
    gameModule = require('../entities/game.js'),
    player = require('../entities/player.js'),
    deck = require('../entities/deck.js');


test("Starting new game", function(t){

    var playerA = Object.create(player, {username: {value: 'Player A', enumerable: true}}),
        playerB = Object.create(player, {username: {value: 'Player B', enumerable: true}}),
        playerC = Object.create(player, {username: {value: 'Player C', enumerable: true}}),
        playerD = Object.create(player, {username: {value: 'Player D', enumerable: true}}),
        players = [playerA, playerB, playerC, playerD],
        game    = Object.create(gameModule);

    t.notOk(players[0].dealer, "At the begining, a player shouldn't be the dealer");
    t.equal(players[0].blind, 0, "At the begining, all the blinds must be 0");

    players = game.assignDealerBlinds(players, 10, 20);

    t.ok(players[0].dealer, "After assigning dealer, the first player must have this role");
    t.equal(players[1].blind, 10, "Second player should have the small blind");
    t.equal(players[2].blind, 20, "Third player should have the big blind");
    t.equal(players[3].blind, 0, "Fourth player doesn't should either be the dealer or have a blind");

    t.end();
});