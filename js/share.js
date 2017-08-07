$( document ).ready(function() {
            var screen = new Screen('screen-unique-id'); // argument is optional
            screen.userid = 'bruno teste';
            // on getting local or remote streams
            screen.onaddstream = function(e) {
                document.body.appendChild(e.video);
            };

            // check pre-shared screens
            // it is useful to auto-view
            // or search pre-shared screens
            screen.check();

            document.getElementById('share-screen').onclick = function() {
                screen.share();
            };   
        });