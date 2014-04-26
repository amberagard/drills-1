/* global AmCharts:true */
/* jshint camelcase:false */

(function() {
    'use strict';

    $(document).ready(initialize);

    function initialize() {
        makeGraph();
        $('#get').click(get);
    }

    function get() {
        var zip = $('#zip').val().trim();
        var url = 'http://api.wunderground.com/api/357ca8eec3b7e3da/conditions/q/' + zip + '.json?callback=?';
        $.getJSON(url, function(weather) {
            addTempToChart(weather);
        });
    }

    function addTempToChart(weather) {
        var temps = {};
        temps.zipcode = weather.current_observation.display_location.zip;
        temps.temp = weather.current_observation.temp_f;

        chart.dataProvider.push(temps);
        chart.validateData();
    }

    var chart;

    function makeGraph() {
        chart = AmCharts.makeChart('weather', {
        'type': 'serial',
        'theme': 'dark',
        'dataProvider': [],
        'valueAxes': [{
            'gridColor':'#FFFFFF',
            'gridAlpha': 0.2,
            'dashLength': 0
        }],
        'gridAboveGraphs': true,
        'startDuration': 1,
        'graphs': [{
            'balloonText': '[[category]]: <b>[[value]]</b>',
            'fillAlphas': 0.8,
            'lineAlpha': 0.2,
            'type': 'column',
            'valueField': 'temp'
        }],
        'chartCursor': {
            'categoryBalloonEnabled': false,
            'cursorAlpha': 0,
            'zoomable': false
        },
        'categoryField': 'zipcode',
        'categoryAxis': {
            'gridPosition': 'start',
            'gridAlpha': 0
        },
        'exportConfig':{
          'menuTop': 0,
          'menuItems': [{
          'icon': '/lib/3/images/export.png',
          'format': 'png'
          }]
        }
    });
        }

})();
