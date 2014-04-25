(function() {
    'use strict';

    $(document).ready(initialize);

    function initialize() {
        $('#position').click(getSymbol);
    }

    function getSymbol() {
        var symbol = $('#symbol').val().trim().toUpperCase();
        var share = $('#shares').val();
        var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' + symbol + '&callback=?';

        $.getJSON(url, function(data) {
            $('#symbol').text(data.Symbol);
            $('#price').text('$' + data.LastPrice);

            var position = share * data.LastPrice;
            $('.share').append(share);
            $('.price').append(data.LastPrice);
            $('.position').append(position);
        });

    }

})();
