(function() {
    'use strict';

    $(document).ready(initialize);

    var clock;
    var timer;

    function initialize() {
        $('#start').click(start);
        $('#stop').click(stop);
        clock = $('#clock').data('time');
    }

    function start() {
        clearInterval(clock);
        timer = setInterval(updateClock, 1000);
    }

    function updateClock() {
        clock++;
        $('#clock').text(clock);
    }

    function stop() {
        clearInterval(timer);
    }

})();
