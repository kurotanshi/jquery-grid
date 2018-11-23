var COLUMN_MIN = 3;
var COLUMN_WIDTH = 100;
var COLUMN_HEIGHT = 60;
var COLUMN_MARGIN = 6;

$(document).ready(function () {

    $(window).bind("resize", _1);

    _1();

    function _1() {
        var par_height = $("#slidegrid").parent().height();	//$(window).height();
        var par_width = $("#slidegrid").parent().width();	//$(window).width();
        var offset_top = $("#slidegrid").offset().top;
        var offset_left = $("#slidegrid").offset().left;
        var arr = new Array();
        var _7 = 0;
        var _8 = 0;
        var _9 = Math.max(COLUMN_MIN, parseInt(par_width / (COLUMN_WIDTH + COLUMN_MARGIN)));

        console.log( par_height );

		$(".cell").css("width", COLUMN_WIDTH + "px").css('height', COLUMN_HEIGHT + 'px').css('background-color', '#691');
        $(".cell-double").css("width", (COLUMN_WIDTH * 2 + COLUMN_MARGIN) + 'px').css('height', (COLUMN_HEIGHT * 1 ) + 'px'); //.css('background-color', '#00FF00');
        $(".cell-triple").css("width", (COLUMN_WIDTH * 3 + COLUMN_MARGIN * 2) + 'px').css('height', (COLUMN_HEIGHT * 3 + COLUMN_MARGIN * 2) + 'px');

        for (x = 0; x < _9; x++) {
            arr[x] = 0;
        }
        $(".cell").each(function (i) {

			var _a, _b, _c, _d = 0;
            var _e = target_y = 0;

            _c = (Math.floor($(this).outerWidth() / COLUMN_WIDTH));
            _b = 0;
            if (_c > 1) {
                for (x = 0; x < _9 - (_c - 1); x++) {
                    _b = (arr[x] < arr[_b]) ? x : _b;
                }
                _a = _b;
                for (var x = 0; x < _c; x++) {
                    _d = Math.max(_d, arr[_a + x]);
                }
                for (var x = 0; x < _c; x++) {
                    arr[_a + x] = parseInt($(this).outerHeight()) + COLUMN_MARGIN + _d;
                }
                _e = _a * (COLUMN_WIDTH + COLUMN_MARGIN) + offset_left;
                target_y = _d + offset_top;
                _7 = (_d > _7) ? arr[_a + _c - 1] : _7;
            } else {
                for (x = 0; x < _9; x++) {
                    _b = (arr[x] < arr[_b]) ? x : _b;
                }
                _e = _b * (COLUMN_WIDTH + COLUMN_MARGIN) + offset_left;
                target_y = arr[_b] + offset_top;
                arr[_b] += $(this).outerHeight() + COLUMN_MARGIN;
                _7 = (arr[_b] > _7) ? arr[_b] : _7;
            }
            $(this).stop();
            $(this).animate({
                left: _e + "px",
                top: target_y + COLUMN_MARGIN + "px",
                borderWidth: "10px"
            }, 500, "easeInOutCubic");
        });
    };
});