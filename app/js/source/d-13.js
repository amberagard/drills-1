(function() {
    'use strict';

    $(document).ready(initialize);

    function initialize() {
        $('#button').click(go);
    }

    var array = $('#input').val().split('-');

    function go() {
        addition();
        multiply();
    }

    function addition() {
        var add = array[0].split('+');

        for(var i = 0; i < array[0]; i++) {
            add +=i;
        }
    }

    function multiply() {
        var mult = array[1].split('*');

        for(var i = 0; i < array[1]; i++) {
            mult *= 1;
        }
    }

    // function go() {
    //     var array = $('#input').val().split('-');
    //     var add = array[0].split(', ');
    //     var multiply = array[1].split(', ');
    //     // var answers = results(add, multiply);
    //     var divs = makeDivs(add, multiply, answers);
    //     $('#box').append(divs);
    // }

    // function results() {
    //
    // }

})();
