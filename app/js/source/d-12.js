(function() {
    'use strict';

    $(document).ready(initialize);

    function initialize() {
        $('#go').click(makeArray);
    }

    function makeArray() {
        var numbers = $('#input').val();
        var array = numbers.split(', ');

        for(var i = 0; i < array.length; i++) {
            var $div = $('<div>');

            if(array[i]%2 === 0) {
                var even = square(array[i]);
                $div.text(even);
                $div.addClass('even');
            } else {
                var odd = cube(array[i]);
                $div.text(odd);
                $div.addClass('odd');
            }

            $('body').append($div);
        }
    }

    function square(i) {
        return i * i;
    }

    function cube(i) {
        return i * i * i;
    }

})();
