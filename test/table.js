
var test = require('tape'),
    table = require('../entities/table.js')();

test("Controlling the number of players", function(t){

    t.ok(table.acceptsNewPlayers(), 'Empty table accepts new players');
    t.notOk(table.atLeastTwoPlayers(), "Empty table doesn't have at least two players");
    for(var i = 0; i < 5; i++){
        table.addPlayer({});
    }

    t.notOk(table.acceptsNewPlayers(), "Full table does'nt accept new players");
    t.ok(table.atLeastTwoPlayers(), "Full table already have two players");

    t.end()
});