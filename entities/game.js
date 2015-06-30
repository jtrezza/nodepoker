
var _    = require('underscore/underscore-min.js');

module.exports = function(){

    var game = {
        bet: 0
    };

    game.assignDealerBlinds = function(players, smallBlind, bigBlind){

        var mapCallback = function(player, index){

            var newPlayer = _.extend({}, player);

            if(index === 0){
                newPlayer.dealer = true;
            }else if(index === 1){
                newPlayer.blind = smallBlind;
            }else if(index === 2){
                newPlayer.blind = bigBlind;
            }

            return newPlayer;
        };

        return players.map(mapCallback);
    };

    game.dealCards = function(players, deck){

        var mapCallback = function(player){

            var newPlayer = _.extend({}, player);
            newPlayer.ownCards.push(deck.takeCard(), deck.takeCard());

            return newPlayer;
        };

        return players.map(mapCallback);
    };

    return game;
};
