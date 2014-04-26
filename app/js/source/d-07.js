(function() {
    'use strict';

    $(document).ready(initialize);

    function initialize() {
        $('#button').click(makeArray);
    }

    function makeArray() {
        var numbers = $('#input').val();
        var array = numbers.split(', ');

        nums(array);
    }

    function divs(x) {
        return '<div>' + x + '</div>';
    }

    function nums(x) {

        var sort = pair(x).map(divs);
        $('#box').append(sort);
    }

    function pair(x) {
        var pairs = [];
        var i = 0;
        while(i < (x.length - 1)) {
            var a = x.shift() * 1;
            var b = x.pop() * 1;
            var c = sum(a, b);
            pairs.push(c);
        }

        if(x.length === 1) {
            var d = x.shift() * 1;
            pairs.push(d);
        }
        //console.log(pairs);
        return pairs;
    }

    function sum(a, b) {
        return a + b;
    }

})();
