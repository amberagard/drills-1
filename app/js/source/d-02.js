(function() {
    'use strict';

    $(document).ready(initialize);

    function initialize() {
        $('#button').click(upperLower);
    }

    function upperLower() {
        var sentence = $('#input').val();
        var words = sentence.split(', ');

        for(var i = 0; i < words.length; i++) {
            var $div = $('<div>');
            $div.text(words[i]);
            colorDiv($div, words[i].length);
            cases($div, words[i].length);
            $('body').append($div);
        }
    }

    function colorDiv($div, length) {
        if(length % 2) {
            //odd
            $div.css('background-color', 'red');
        } else {
            //even
            $div.css('background-color', 'green');
        }
    }

    function cases(words, length) {
        if(length % 2) {
            //odd
            words.css('text-transform', 'uppercase');
        }
    }

})();
