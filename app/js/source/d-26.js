/* jshint camelcase:false */

(function() {
    'use strict';

    $(document).ready(initialize);

    function initialize() {
        $('#forecast').click(get);
    }

    function get() {
        var zip = $('#zip').val().trim();
        var url = 'http://api.wunderground.com/api/357ca8eec3b7e3da/forecast10day/q/' + zip + '.json?callback=?';

        $.getJSON(url, function(weather) {
            getForecast(weather);
        });
    }

    function display(icon, weekday) {
        var tenDay = '<div class="holder"><img src="' + icon + '"></img><div class="day">' + weekday + '</div></div>';
        $('#weather').append(tenDay);
    }

    function getForecast(weather) {
        var days = weather.forecast.simpleforecast.forecastday;

        for(var i = 0; i < days.length; i++) {
            var weekday = days[i].date.weekday;
            var icon = days[i].icon_url;
            display(icon, weekday);
        }
    }

})();
