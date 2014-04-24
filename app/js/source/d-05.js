(function() {
    'use strict';

    $(document).ready(initialize);

    function initialize() {
        $('#button').click(makeArray);
    }

    function makeArray() {
        var numbers = $('#input').val();
        var array = numbers.split(', ').map(square).filter(isEven);

        for(var i = 0; i < array.length; i++) {
            var $div = $('<div>');
            $div.text(array[i]);
            $('body').append($div);
        }
    }

    function square(i) {
        return i * i;
    }

    function isEven(i) {
        return i%2 - 1;
    }

})();
