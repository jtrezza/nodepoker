
var player = module.exports = function(properties){

        var player = {
            dealer: false,
            blind: 0,
            ownCards: []
        };

        for (var p in properties ){
          player[p] = properties[p];
        }

        if(typeof properties.chips == 'undefined'){
          player.chips = 1000;
        }

        return player;
    };
