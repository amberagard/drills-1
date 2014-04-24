(function() {
    'use strict';

    $(document).ready(initialize);

    function initialize() {
        $('#button').click(makeArray);
    }

    function makeArray() {
        var numbers = $('#input').val();
        var array = numbers.split(', ');
        var array1 = array[0] * 1;
        var array2 = array[1] * 1;

        var results = nums(array1, array2).map(divs);

        $('#box').append(results);
    }

    function divs(array1) {
        return $('<div>').append().text(array1);
    }

    function nums(array1, array2) {
        var num = [];
        var sort = [];

        for(var i = array1; i <= array2; i++) {
            num.push(i);
        }

        for(var j = 0; num.length !==0; j++) {
            var a = num.shift();
            var b = num.length ? num.pop() : 0;

            sort[j] = (a * 1) + (b * 1);
        }

        return sort;
    }

})();
