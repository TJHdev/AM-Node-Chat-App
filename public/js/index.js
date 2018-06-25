let socket = io();

socket.on('connect', function () {
    console.log('Connected to server.');

    socket.emit('createMessage', {
        from: 'Tom',
        text: 'Why are you such a twat?'
    })

});

socket.on('newMessage', function(newMessage) {
    console.log('newMessage', newMessage);
})

socket.on('disconnect', function () {
    console.log('Disconnected from server.')
});



