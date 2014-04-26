(function() {
    'use strict';

    $(document).ready(initialize);

    function initialize() {
        $('#button').click(exponentiate);
    }

    function exponentiate() {
        var array = $('#input').val().split('-');
        var bases = array[0].split(', ');
        var exponents = array[1].split(', ');
        var answers = results(bases, exponents);
        var divs = makeDivs(bases, exponents, answers);
        $('#box').append(divs);
    }

    function results(bases, exponents) {
        var answers = [];
        for(var i = 0; i < bases.length; i++) {
            answers.push(Math.pow(bases[i], exponents[i]));
        }

        return answers;
    }

    function makeDivs(bases, exponents, answers) {
        var divs = [];

        for(var i = 0; i < bases.length; i++) {
            var top = '<div>' + bases[i] + '<sup>' + exponents[i] + '</sup></div>';
            var bottom = '<div>' + answers[i] + '</div>';
            var out = '<div>' + top + bottom + '</div>';
            divs.push(out);
        }

        return divs;
    }

})();
