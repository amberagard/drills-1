(function() {
    'use strict';

    $(document).ready(initialize);

    function initialize() {
        $('#button').click(makeArray);
    }

    function makeArray() {
        var numbers = $('#input').val();
        var array = numbers.split(', ').map(fourth);

        for(var i = 0; i < array.length; i++) {
            var $div = $('<div>');
            $div.text(array[i]);
            $('body').append($div);
        }
    }

    function fourth(i) {
        return i * i * i * i;
    }

})();
