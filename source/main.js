
$ = require('jquery');

$(document).on('ready', function(){
    var socket = io();

    socket.on('choose_username', function(msg){
        var username = prompt("Please enter your username", "Unnamed");
        socket.emit('username_chosen', username);
    });

    socket.on('table_full', function(msg){
        alert(msg);
    });

    socket.on('turn', function(msg){
        alert('game has begun');
    });
    /*var form = document.getElementById('formMessage');
    form.addEventListener('submit', function(){
        var message = document.getElementById('txtMessage').value;
        socket.emit('chat-message', message);
        document.getElementById('txtMessage').value = '';

        return false;
    });

    socket.on('msg-from-server', function(msg){
        var li = document.createElement('li');
        li.innerHTML = msg;
        document.getElementById('messages').appendChild(li);
    });*/
});