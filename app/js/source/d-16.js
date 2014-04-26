(function() {
    'use strict';

    $(document).ready(initialize);

    function initialize() {
        $('#get').click(getQuote);
    }

    function getQuote() {
        var symbol = $('#symbol').val().trim().toUpperCase();
        var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' + symbol + '&callback=?';
        // var $div = $('<div>');

        $.getJSON(url, function(data) {
            $('#sym').text(data.Symbol);
            $('#name').text(data.Name);
            $('#price').text('$' + data.LastPrice).css('background-color', 'red');
            console.log(data);
        });


        // $div.text(json);
        // $('#quote').append($div);
    }

})();
