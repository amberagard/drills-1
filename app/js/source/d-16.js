(function() {
    'use strict';

    $(document).ready(initialize);

    function initialize() {
        $('#get').click(getQuote);
    }

    function getQuote() {
        var symbol = $('#symbol').val().trim().toUpperCase();
        var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' + symbol + '&callback=?';

        $.getJSON(url, function(data) {
            var info = $('<div class="quote"></div>');
            var symbol = $('<div class="sym"></div>').text(data.Symbol);
            var name = $('<div class="name"></div>').text(data.Name);
            var price = $('<div class="price"></div>').text('$' + data.LastPrice).css('background-color', 'red');

            $(info).append(symbol, name, price);
            $('#quote').append(info);
        });

    }

})();
