removeHexagonShapedFrames();

function removeHexagonShapedFrames() {
    setInterval(() => {
        $('*').filter(function () {
            return $(this).css('clip-path') == 'url(#hex-hw-shapeclip-clipconfig)'
        }).css('clip-path', 'circle(50%)');
        $('*').filter(function () {
            return $(this).css('clip-path') == 'url("#hex-hw-shapeclip-clipconfig")'
        }).css('clip-path', 'circle(50%)');
    }, 10)
}