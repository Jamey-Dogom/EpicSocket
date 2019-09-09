$(document).ready(function () {

    var socket = io();

    var epic = document.getElementById("epic");
    var reset = document.getElementById("reset");

    epic.addEventListener('click', function(){
        socket.emit('add', {
            val : 1
        });
    });

    reset.addEventListener('click', function() {
        socket.emit('reset', {
            res : 0
        });
    });

    socket.on('add', function(data){
        total.innerHTML = data.val;
    });

    socket.on('reset', function(data){
        $("#total").text("0");
    })

});