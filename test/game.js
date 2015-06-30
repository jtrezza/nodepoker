
var test = require('tape'),
    _    = require('underscore/underscore-min.js'),
    gameModule = require('../entities/game.js'),
    player = require('../entities/player.js'),
    deck = require('../entities/deck.js')(),

    playerA, playerB, playerC, playerD, players, game;

test("Before all tests", function (t) {

    playerA = player('Player A'),
    playerB = player('Player B'),
    playerC = player('Player C'),
    playerD = player('Player D'),
    players = [playerA, playerB, playerC, playerD],
    game    = gameModule();

    t.end();
});

test("Assigning dealer and blinds", function(t){

    t.notOk(players[0].dealer, "At the begining, the first player shouldn't be the dealer");
    t.equal(players[1].blind, 0, "At the begining, all the blinds must be 0");

    players = game.assignDealerBlinds(players, 10, 20);

    t.ok(players[0].dealer, "After assigning dealer, the first player must have this role");
    t.equal(players[1].blind, 10, "Second player should have the small blind");
    t.equal(players[2].blind, 20, "Third player should have the big blind");
    t.equal(players[3].blind, 0, "Fourth player doesn't should either be the dealer or have a blind");

    t.end();
});

test("Dealing cards", function(t){

    players = game.dealCards(players, deck);

    t.equal(players[0].ownCards.length, 2, "Each player should have 2 cards");
    t.equal(players[1].ownCards.length, 2, "Each player should have 2 cards (testing in other player)");

    t.end();
});