
$ = require('jquery');

$(document).on('ready', function(){
    var socket = io();

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