let socket = io();

let latestRooms;

resetList = function(rooms){
    var currentRoomsEl = jQuery('#current-rooms');
    currentRoomsEl.html('');
    currentRoomsEl.append(jQuery('<option></option>').html('Join an existing chat').attr("disabled", "disabled")
    .attr("selected", "selected").attr("hidden", "hidden"));
    rooms.forEach(function(room) {
        currentRoomsEl.append(jQuery('<option></option>').html(room));
    })
}

hideList = function(e) {
    let inputText = e.target.value.toLowerCase().trim();
    let selectElChildrenArray = selectEl.children;
    let hideCombo = false;

    for (var i = 0, length = selectElChildrenArray.length; i < length; i++) {
        if (selectElChildrenArray[i].innerHTML === inputText) {
            hideCombo = true;
        }
    }

    if (hideCombo) {
        selectEl.classList.add('hidden');
    } else {
        selectEl.classList.remove('hidden');
        resetList(latestRooms)
    }
}


socket.on('updateRoomList', function(rooms){
    resetList(rooms)
    latestRooms = rooms;
})

const chatRoomInputEl = document.querySelector('#chatRoomInput');
const selectEl = document.querySelector('#current-rooms')

combo = function (thelist) {
    var idx = thelist.selectedIndex;
    var content = thelist.options[idx].innerHTML;
    chatRoomInputEl.value = content;
    thelist = $(thelist)
    // thelist.addClass('hidden');
}

selectEl.addEventListener('click', function(e) {
    hideList(e);
})

chatRoomInputEl.addEventListener('input', function (e) {
    hideList(e);
})

