// (function() {
//     'use strict';
//
//     $(document).ready(initialize);
//
//     function initialize() {
//         $('#button').click(getArray);
//     }
//
//     function getArray() {
//         var symbols = $('#input').val().trim().toUpperCase();
//         var symbol = symbols.split(', ');
//         //$('body').append(symbol);
//         var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' + symbol + '&callback=?';
//
//         $.getJSON(url, function(data) {
//
//
//         }
//
//         for(var i = 0; i < symbol; i++) {
//             getQuotes();
//         }
//     }
//
//     function getQuotes(data) {
//         // $.getJSON(url, function(data) {
//         //     $('#sum').text('$' + data.LastPrice);
//         //     $('#sum').append(data.LastPrice);
//         // });
//         //
//         // console.log(data.LastPrice);
//     }
//
// })();
