// +function (window, document, $, Base64, noop) {
+function (window, document, $) {


    /* 1. init */
    if (window.erya) return
    if (!$) return alert('好像出了点问题.')

    // var addScript, b, c, d = "script";
    // addScript = function(a) {
    //     b = document.createElement(d)
    //     c = document.getElementsByTagName(d)[0]
    //     b.src = a
    //     c.parentNode.insertBefore(b, c)
    // }
    // noop = function(){/* null */}
    // base64 = new Base64

    var
    noop = $.noop //减少压缩大小
    , player = $('#eryaPlayer').getPlayer()
    , playerUrl = '//erya.unmric.com/player.swf'


    /* 2. Flash */
    $(player).attr('data', playerUrl)


    /* 3. pause */
    jQuery.fn.PauseMovieBak = $.fn.pauseMovie
    $.fn.pauseMovie = noop


    /* 4. blur */
    window.onblur = noop
    window.onfocus = noop
    // IE
    document.onfocusout = noop
    document.onfocusin = noop


    /* 5. events */

    // Pause
    // $(window).on("onPause", function(event, proTime) {

    // })

    // End
    // $(window).on("onEnd", function(event, index, data, enc) {

    // })

    // SendProgressSuccess
    $(window).on("onSendProgressSuccess", function(event, data) {
        $.parseJSON(data).status == 4 && $(event.target).goPlay($("#videoNumber").val())
    })


    /* 6. Mrak */
    window.erya = true
    alert('运行成功!\n===\n本版本 ( 1.1.0-beta ) 支持：\n后台运行、禁止自动暂停、自动播放下一集、\n去除验证码功能 ( beta )。')

}(window, document, jQuery)
// }(window, document, jQuery, Base64)