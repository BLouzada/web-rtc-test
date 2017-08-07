var videosContainer = document.getElementById("videos-container") || document.body;
var roomsList = document.getElementById('rooms-list');
var screensharing = new Screen();
screensharing.onscreen = function(_screen) {
    console.log(_screen);
    var alreadyExist = document.getElementById(_screen.userid);
    if (alreadyExist) return;
    if (typeof roomsList === 'undefined') roomsList = document.body;
    var tr = document.createElement('tr');
    tr.id = _screen.userid;
    tr.innerHTML = '<td>' + _screen.userid + ' shared his screen.</td>' +
            '<td><button class="join">Preview His Screen</button></td>';
    roomsList.insertBefore(tr, roomsList.firstChild);
    var button = tr.querySelector('.join');
    button.setAttribute('data-userid', _screen.userid);
    button.setAttribute('data-roomid', _screen.roomid);
    button.onclick = function() {
        var button = this;
        button.disabled = true;
        var _screen = {
            userid: button.getAttribute('data-userid'),
            roomid: button.getAttribute('data-roomid')
        };
        screensharing.view(_screen);
    };
};