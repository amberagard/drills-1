/* global AmCharts:true */
/* jshint camelcase:false */

(function() {
    'use strict';

    $(document).ready(initialize);

    function initialize() {
        makeGraph();
        $('#add').click(get);
    }

    function get() {
        var symbol = $('#symbol').val().trim().toUpperCase();
        var shares = $('#shares').val().trim() * 1;
        var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' + symbol + '&callback=?';
        $.getJSON(url, function(quote) {
            addSharesToChart(quote, shares);
        });
    }

    function addSharesToChart(quote, shares) {
        var stock = {};
        stock.symbol = quote.Symbol;
        stock.position = quote.LastPrice * shares;
        chart.dataProvider.push(stock);
        chart.validateData();
    }

    var chart;

    function makeGraph() {
        chart = AmCharts.makeChart('stock', {
        'type': 'pie',
    	'theme': 'patterns',
        'titles': [{
            'text': 'Stock',
            'size': 16
        }],
        'dataProvider': [],
        'valueField': 'position',
        'titleField': 'symbol',
        'startEffect': 'elastic',
        'startDuration': 2,
        'labelRadius': 15,
        'innerRadius': '50%',
        'depth3D': 10,
        'balloonText': '[[title]]<br><span style="font-size:14px"><b>[[value]]</b> ([[percents]]%)</span>',
        'angle': 15,
        'exportConfig':{
          menuItems: [{
          icon: '/lib/3/images/export.png',
          format: 'png'
          }]
    	}
    });

        }

})();
