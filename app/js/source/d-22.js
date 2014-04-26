/* jshint camelcase:false */

(function() {
    'use strict';

    $(document).ready(initialize);

    function initialize() {
        $('#get').click(get);
    }

    function get() {
        var zip = $('#zip').val().trim();
        var url = 'http://api.wunderground.com/api/357ca8eec3b7e3da/conditions/q/' + zip + '.json?callback=?';
        $.getJSON(url, weather);
    }

    function weather(conditions) {
        var $img = $('<img>');
        $img.attr('src', conditions.current_observation.icon_url);
        $('#weather').append($img);

        var $div = $('<div>');
        $div.text(conditions.current_observation.temperature_string);
        $('#weather').append($div);
    }

})();
