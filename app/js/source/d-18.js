(function() {
    'use strict';

    $(document).ready(initialize);

    function initialize() {
        $('#update').click(getSymbols);
    }

    function getSymbols() {
        var symbols = $('#symbols').val().toUpperCase();
        var symbol = symbols.split(', ');

        for(var i = 0; i < symbol.length; i++) {
            makeTable(symbol[i]);
        }

        setInterval(function() {
            refresh(symbol);
        }, 10000);
    }

    function refresh(symbol) {
        for(var i = 0; i < symbol.length; i++) {
            refreshPrice(symbol[i]);
        }
    }

    function refreshPrice(symbol) {
        var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' + symbol + '&callback=?';

        $.getJSON(url, function(data) {
            var updatedPrice = data.LastPrice;
            $('#' + symbol).find('.prc').text('$' + updatedPrice);
            console.log(updatedPrice);
        });

    }

    function makeTable(symbol) {
        var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' + symbol + '&callback=?';
        $.getJSON(url, function(data) {
            var price = data.LastPrice;
            refreshTable(symbol, price);
        });
    }

    function refreshTable(symbol, price) {
        var $tr = $('<tr id="' + symbol + '">');
        var $td1 = $('<td>').text(symbol).addClass('sym');
        var $td2 = $('<td>').text('$' + price).addClass('prc');
        $tr.append($td1, $td2);
        $('#update > tbody').append($tr);
    }

})();
