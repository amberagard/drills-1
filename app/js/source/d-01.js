(function() {
    'use strict';

    $(document).ready(initialize);

    function initialize() {
        $('#equals').click(answer);
    }

    function answer() {
        var x = $('#num1').val() * 1;
        var y = $('#num2').val() * 1;
        $('#answer').text(x + y);
    }

})();
