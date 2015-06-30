
var test = require('tape'),
    deck = require('../entities/deck.js');

test("Testing deck's functionality", function(t){

    var deckA = deck();
    var deckB = deck();

    t.deepEqual(deckA.cards, deckB.cards, "Decks should initially have the same order");

    deckA.shuffle();
    t.notDeepEqual(deckA.cards, deckB.cards, "After shuffling, both decks order shouln't be equal");

    var firstCard = deckB.takeCard();
    t.equal(firstCard.name, "2c", "Method correctly take the first card from the deck");
    t.equal(deckB.cards.length, 51, "Deck's cards quantity should have been decreased by 1");

    for(var i = 0; i < 51; i++){
        deckB.takeCard();
    }

    t.notOk(deckB.areThereCards(), "Souldn't have any cards after we take 52");

    t.end();
});