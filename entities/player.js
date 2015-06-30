
var player = module.exports = function(username, chips){

        var user = username || undefined,
            poker_chips = chips || 1000;

        return {
            username: user,
            poker_chips: poker_chips,
            dealer: false,
            blind: 0,
            ownCards: []
        };
    };
