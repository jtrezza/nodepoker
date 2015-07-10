
var _    = require('underscore/underscore-min.js');

module.exports = function(properties){

    var game = {};

    for (var p in properties ){
        game[p] = properties[p];
    }

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

    //Function written to be invoked using 'call'
    game.turn = function(){
        if(this.players.length > 3){
          var current_turn = 3;
        } else {
          var current_turn = (this.players.length) - 1;
        }
        this.current_turn = current_turn;
        var currentBet = this.bet;

        var infoAll = {yourTurn: false, currentBet: currentBet};
        var infoCurrentPlayer = {yourTurn: true, currentBet: currentBet};

        return {all: infoAll, currentPlayer: infoCurrentPlayer}
    };

    return game;
};
