(function() {
    'use strict';

    $(document).ready(initialize);

    var $currentDiv;

    function initialize() {
        $('#add').click(addRectangle);
        $('body').on('click', '.clickable', clickDiv);
        $('body').keydown(pressArrow);
    }

    function addRectangle() {
        var height = Math.floor(Math.random() * 300);
        var width = Math.floor(Math.random() * 400);

        var x = Math.floor(Math.random() * (window.innerWidth - width));
        var y = Math.floor(Math.random() * (window.innerHeight - height));

        var $div = $('<div>').addClass('clickable');
        $div.css('top', y).css('left', x).css('width', width).css('height', height).css('background-color', randomColor());
        $('body').append($div);
    }

    function randomColor() {
        var hue = 'rgba(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.random() * 1) + ')';

        return hue;
    }

    function clickDiv() {
        $currentDiv = $(this);
        console.log($currentDiv);
    }

    function pressArrow(event) {
        if($currentDiv === undefined) {
            return;
        }
        
        var maxWidth = window.innerWidth;
        var maxHeight = window.innerHeight;

        var offset = $currentDiv.position();
        var top;
        var left;
        switch(event.keyCode) {
            case 38://up
                top = Math.floor(offset.top) - 5;
                if(top < 0) {
                    top = 0;
                }
                $currentDiv.css('top', top);
                break;
            case 40://down
                top = Math.floor(offset.top) + 5;
                if(top + $currentDiv.height() > maxHeight) {
                    top = maxHeight - $currentDiv.height();
                }
                $currentDiv.css('top', top);
                break;
            case 37://left
                left = Math.floor(offset.left) - 5;
                if(left < 0) {
                    left = 0;
                }
                $currentDiv.css('left', left);
                break;
            case 39://right
                left = Math.floor(offset.left) + 5;
                if(left + $currentDiv.width() > maxWidth) {
                    left = maxWidth - $currentDiv.width();
                }
                $currentDiv.css('left', left);
        }

        if(event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40) {
            event.preventDefault();
        }
    }

})();
