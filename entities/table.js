
var waiting = 0,
    playing = 1;

module.exports = function(){

    var table = {
        players: 0,
        bet: 0,
        status: waiting,
        small_blind: 10,
        big_blind: 20,
        time_per_turn: 10000,
        current_bet: 0,
        max_players: 5,
        count_players: 0,
        players: [],
        deck: undefined,
        game: undefined,
        current_turn: undefined
    };

    table.acceptsNewPlayers = function(){
        return this.count_players < this.max_players;
    };

    table.addPlayer = function(player){
        this.players.push(player);
        this.count_players = this.players.length;
    };

    table.atLeastTwoPlayers = function(){
        return this.count_players >= 2;
    };

    table.startGame = function(deck, game){
        if(this.status === playing){
            throw 'Current status is "playing"';
        }
        this.game = game;
        this.status = playing;

        this.deck = deck;
        this.deck.shuffle();

        this.players = game.assignDealerBlinds(this.players, this.small_blind, this.big_blind);
        this.players = game.dealCards(this.players, this.deck);

        return this.game['turn'].call(this);
    };

    return table;
};
