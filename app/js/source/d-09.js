(function() {
    'use strict';

    $(document).ready(initialize);

    function initialize() {
        $('#random').click(randomColor);
    }

    function randomColor() {
        var hue = 'rgba(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.random() * 1) + ')';

        $(this).css('background-color', hue);
    }
})();
