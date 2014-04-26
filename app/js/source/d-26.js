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
        // $.getJSON(url, function(weather) {
        //     getForecast(weather);
        // });

        $.getJSON(url, function(weather) {
            getForecast(weather);
        });

    }

    // function weather(conditions) {
    //     // var forecastday = 0;
    //     // for(var i = 0; i < forecastday; i++) {
    //     //     var $img = $('<img>');
    //     //     $img.attr('src', conditions.forecast.simpleforecast.forecastday.weekday.icon_url);
    //     //     $('#weather').append($img);
    //     // }
    //
    //
    //     // var $div = $('<div>');
    //     // $div.text(conditions.current_observation.temperature_string);
    //     // $('#weather').append($div);
    //
    //
    // }


    function getForecast(weather) {
        var days = {};
        days.day = weather.forecast.simpleforecast.forecastday.weekday;
        //days.icon = weather.forecast.simpleforecast.forecastday.weekday.icon_url;
        console.log(days);
        //days.day = weather.forecast10day.forecast.title;
        //days.icon = weather.forecast10day.forecast.icon_url;

        // var $img = $('<img>');
        // $img.attr('src', weather.forecast10day.icon_url);
        // $('#weather').append($img);

        // var $div = $('<div>');
        // $div.text(conditions.current_observation.temperature_string);
        // $('#weather').append($div);
    }

})();
