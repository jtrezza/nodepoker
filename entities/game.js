

var game = module.exports = {
    bet: 0
};

game.assignDealerBlinds = function(players, smallBlind, bigBlind){

    var mapCallback = function(player, index){

        var newPlayer = Object.create(player);
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

    newPlayers = Object.create(players);

    var forEachCallback = function(player){
        player.ownCards.push(deck.takeCard(), deck.takeCard());
    };

    newPlayers.forEach(forEachCallback);

    return newPlayers;
};