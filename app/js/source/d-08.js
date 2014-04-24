(function() {
    'use strict';

    $(document).ready(initialize);

    var tog = 1;

    function initialize() {
        $('#toggle').click(toggle);
    }

    function toggle() {
        if(tog === 1) {
            $(this).removeClass('yellow');
            $(this).addClass('purple');
            $(this).css('background-color', 'purple');
        } else {
            $(this).removeClass('purple');
            $(this).addClass('yellow');
            $(this).css('background-color', 'yellow');
        }

        tog *= -1;
    }

})();
