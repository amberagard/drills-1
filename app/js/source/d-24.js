/* global AmCharts:true */
/* jshint camelcase:false */

(function() {
    'use strict';

    $(document).ready(initialize);

    function initialize() {
        makeGraph();
        $('#wind').click(get);
    }

    function get() {
        var zip = $('#zip').val().trim();
        var url = 'http://api.wunderground.com/api/357ca8eec3b7e3da/conditions/q/' + zip + '.json?callback=?';
        $.getJSON(url, function(wind) {
            getWind(wind);
        });
    }

    function getWind(wind) {
        var w = wind.current_observation.wind_gust_mph;

        chart.arrows[0].setValue(w);
        chart.axes[0].setBottomText(w + 'mph');
    }

    var chart;

    function makeGraph() {
        chart = AmCharts.makeChart('weather', {
        'type': 'gauge',
    	'theme': 'chalk',
        'axes': [{
            'axisThickness':1,
             'axisAlpha':0.2,
             'tickAlpha':0.2,
             'valueInterval':5,
            'bands': [{
                'color': '#84b761',
                'endValue': 10,
                'startValue': 0
            }, {
                'color': '#fdd400',
                'endValue': 20,
                'startValue': 10
            }, {
                'color': '#cc4748',
                'endValue': 30,
                'innerRadius': '95%',
                'startValue': 20
            }],
            'bottomText': '0 mph',
            'bottomTextYOffset': -20,
            'endValue': 30
        }],
        'arrows': [{}]
        });
    }
})();
