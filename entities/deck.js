
var _ = require('underscore'),

    deck = module.exports = {
        cards: [
            {name:"2c", font:'o', color:'black'},
            {name:"2d", font:'B', color:'red'},
            {name:"2h", font:'O', color:'red'},
            {name:"2s", font:'b', color:'black'},
            {name:"3c", font:'p', color:'black'},
            {name:"3d", font:'C', color:'red'},
            {name:"3h", font:'P', color:'red'},
            {name:"3s", font:'c', color:'black'},
            {name:"4c", font:'q', color:'black'},
            {name:"4d", font:'D', color:'red'},
            {name:"4h", font:'Q', color:'red'},
            {name:"4s", font:'d', color:'black'},
            {name:"5c", font:'r', color:'black'},
            {name:"5d", font:'E', color:'red'},
            {name:"5h", font:'R', color:'red'},
            {name:"5s", font:'e', color:'black'},
            {name:"6c", font:'s', color:'black'},
            {name:"6d", font:'F', color:'red'},
            {name:"6h", font:'S', color:'red'},
            {name:"6s", font:'f', color:'black'},
            {name:"7c", font:'t', color:'black'},
            {name:"7d", font:'G', color:'red'},
            {name:"7h", font:'T', color:'red'},
            {name:"7s", font:'g', color:'black'},
            {name:"8c", font:'u', color:'black'},
            {name:"8d", font:'H', color:'red'},
            {name:"8h", font:'U', color:'red'},
            {name:"8s", font:'h', color:'black'},
            {name:"9c", font:'v', color:'black'},
            {name:"9d", font:'I', color:'red'},
            {name:"9h", font:'V', color:'red'},
            {name:"9s", font:'i', color:'black'},
            {name:"Tc", font:'w', color:'black'},
            {name:"Td", font:'J', color:'red'},
            {name:"Th", font:'W', color:'red'},
            {name:"Ts", font:'j', color:'black'},
            {name:"Jc", font:'x', color:'black'},
            {name:"Jd", font:'K', color:'red'},
            {name:"Jh", font:'X', color:'red'},
            {name:"Js", font:'k', color:'black'},
            {name:"Qc", font:'y', color:'black'},
            {name:"Qd", font:'L', color:'red'},
            {name:"Qh", font:'Y', color:'red'},
            {name:"Qs", font:'l', color:'black'},
            {name:"Kc", font:'z', color:'black'},
            {name:"Kd", font:'M', color:'red'},
            {name:"Kh", font:'Z', color:'red'},
            {name:"Ks", font:'m', color:'black'},
            {name:"Ac", font:'n', color:'black'},
            {name:"Ad", font:'A', color:'red'},
            {name:"Ah", font:'N', color:'red'},
            {name:"As", font:'a', color:'black'}
        ],
        outed: []
    };

deck.shuffle = function(){
    this.cards = _.shuffle(this.cards);
};

deck.areThereCards = function()
{
    return (this.cards.length > 0);
}

deck.takeCard = function(){

    if(this.areThereCards()){
        var card = this.cards.shift();
        this.outed.push(card);

        return card;
    }else{
        return false;
    }
};