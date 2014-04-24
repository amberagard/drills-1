(function() {
    'use strict';

    $(document).ready(initialize);

    function initialize() {
        $('#button').click(go);
    }

    function go() {
        var array = $('#input').val().split('-');
        var add = array[0].split('+').filter(isOdd);
        var multiply = array[1].split('*').filter(isOdd);
        var sum = getSum(add);
        var product = getProduct(multiply);
        $('#sum').append(sum);
        $('#product').append(product);
    }

    function isOdd(x) {
        return x % 2;
    }

    function getSum(x) {
        var sumX = 0;
        for(var i =0; i < x.length; i++) {
            var a = x[i];
            sumX += (a * 1);
        }

        return sumX;
    }

    function getProduct(x) {
        var productX = 1;
        for(var i = 0; i < x.length; i++) {
            var a = x[i];
            productX *= (a * 1);
        }

        return productX;
    }

})();
