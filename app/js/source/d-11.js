(function() {
    'use strict';

    $(document).ready(initialize);

    var $currentDiv;
    var maxWidth;
    var maxHeight;

    function initialize() {
        var ah = window.innerHeight;
        var aw = window.innerWidth;
        var bw = $('#big').width();
        var bh = $('#big').height();
        var cw = $('#small').width();
        var ch = $('#small').height();

        var bigX = Math.random() * (aw - bw);
        var bigY = Math.random() * (ah - bh);

        $('#big').css('top', bigY);
        $('#big').css('left', bigX);

        var smallX = Math.random() * (bw - cw);
        var smallY = Math.random() * (bh - ch);

        $('#small').css('top', smallY);
        $('#small').css('left', smallX);

        $('#big').click(clickBig);
        $('#small').click(clickSmall);
        $('body').keydown(pressArrow);
    }

    function clickBig() {
        $currentDiv = $(this);
        maxWidth = window.innerWidth;
        maxHeight = window.innerHeight;
    }

    function clickSmall() {
        $currentDiv = $(this);
        maxWidth = $('#big').width();
        maxHeight = $('#big').height();
        event.stopPropagation();
    }

    function pressArrow(event) {
        if($currentDiv === undefined) {
            return;
        }

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
