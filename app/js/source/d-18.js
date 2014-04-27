(function() {
    'use strict';

    $(document).ready(initialize);

    function initialize() {
        $('#update').click(getSymbols);
    }

    function getSymbols() {
        var symbols = $('#symbols').val();
        var symbol = symbols.split(', ');
        var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' + symbol + '&callback=?';

        $.getJSON(url, function(data) {
                var $tr = $('<tr>');
                var $td1 = $('<td>').text(data.Symbol).addClass('sym');
                var $td2 = $('<td>').text('$' + data.LastPrice).addClass('prc');
                $tr.append($td1, $td2);
                $('#update > tbody').append($tr);
                console.log(data);
        });

    //     setInterval(function() {
    //         .reload('.quote');
    //     }, 1000);
    //
    }

    function refreshPrice() {
        var prices = $('td.prc');
        for(var i = 0; i < prices.length; i++) {
            var symbol = prices.eq(i).siblings('.sym');
            console.log(symbol.html());
        }

    }
    window.refreshPrice = refreshPrice;

})();
