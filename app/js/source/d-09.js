(function() {
    'use strict';

    $(document).ready(initialize);

    function initialize() {
        $('#random').click(randomColor);
    }

    function randomColor() {
        var hue = 'rgba(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.random() * 1) + ')';




        // var letters = '0123456789ABCDEF'.split('');
        // var color = '#';
        // for(var i = 0; i < 6; i++) {
        //     color += letters[Math.floor(Math.random() * 16)];
        // }

        $(this).css('background-color', hue);
    }
})();
