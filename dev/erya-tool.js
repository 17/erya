function private_sendPro(event, data, enc) {
    var courseId = $("#courseId").val();
    var schoolCourseId = $("#schoolCourseId").val();
    $(event.target).sendProgress("/student/studentVideoAction!recieveNewVideoTime", {
        courseId:courseId,
        videoId:data.videoId,
        videoNumber:data.seriNum,
        schoolCourseId:schoolCourseId,
        rand:enc
    }, enc);
}

function onSendProgressSuccess(event, data, enc) {
    var d = eval("(" + data + ")");
    if (d.status == 4) {
        end(event, d.videoNumber - 1, data, enc);
    }
}

function end(event, index, data, enc) {
    var i = index;
    var j = i + 1;
    $(".black").each(function(j, o) {
        if (j == index + 1) {
            var hf = $(this).find("a");
            $(o).addClass("active");
            $(o).find(".coursePlay").addClass("times");
            $(o).find(".coursePlay").removeClass("qustion");
            $(this).find(".coursePlay").removeClass("qustion");
            hf.attr("href", hf.attr("url"));
        } else {
            $(o).removeClass("active");
        }
    });
}

function checkFlashVersion() {
    var box = $("#flashVersion");
    var myVersion = 11;
    var fls = flashChecker();
    var href = "http://www.adobe.com/go/getflashplayer";
    if (fls.hasFlash) {
        if (fls.version < myVersion) {
            box.find(".tip-content").html('<p style="font-size:16px;color:red;">您安装的flash版本(' + fls.version + '.x)过低，请升级您的flashplayer版本至<font color="#FF0000">' + myVersion + '</font>以上,<a href="' + href + '" target="_blank">点此升级</a>。</p>');
            box.slideDown();
        } else {
            return true;
        }
    } else {
        box.find(".tip-content").html('<p style="font-size:16px;color:red;">您没有安装flashplayer，请到<a href="' + href + '" target="_blank">http://www.adobe.com</a>下载安装。</p>');
        box.slideDown();
    }
    return false;
}

function onEnd(event, index, data, enc) {
    private_sendPro(event, data, enc);
}

function unlock(event, index, data) {
    if (index == currIndex) {
        return;
    }
    $(".black").each(function(i, o) {
        if (i == index) {
            $(o).addClass("active");
            $(o).addClass("click");
            $(o).find(".coursePlay").removeClass("qustion");
            $(this).find(".coursePlay").removeClass("qustion");
        } else {
            $(o).removeClass("active");
            $(o).removeClass("click");
        }
    });
}

function onPlaySecond(event, proTime, proSize, data, enc) {
    private_sendPro(event, data, enc);
}

var currIndex = 0;

function onGoPlay(event, videoIndex, data, enc) {
    currIndex = videoIndex;
    $(".black").each(function(i, o) {
        if (i == videoIndex) {
            $(o).addClass("active");
            $(o).addClass("click");
        } else {
            $(o).removeClass("active");
            $(o).removeClass("click");
        }
    });
    private_sendPro(event, data, enc);
    $("#videoId").val(data.videoId);
    $("#videoNumber").val(data.seriNum);
    $("#video_num").html($("#videoNumber").val());
    try {
        if (replaceUrl && typeof replaceUrl == "function") {
            replaceUrl(data.videoId);
        }
    } catch (e) {}
}

function goPlay(seriNum) {
    cur_video = seriNum;
    init_scroll();
    if (currIndex + 1 != seriNum) {
        $("#eryaPlayer").goPlay(seriNum - 1);
    }
}

function onTurnOff(event, isOff) {
    chgBackground();
}

function chgBackground() {
    $("#shadow").toggle();
    if ($("#shadow").is(":hidden")) {
        $(this).removeClass("turnedOff");
    } else {
        $("#shadow").height($("body").height());
        $(this).addClass("turnedOff");
    }
}

var isDiu = false;

function getPlayConfig(info, data) {
    var config = {
        width:841,
        height:520,
        player:"http://imageresource.tsk.erya100.com/flash/player/player.swf",
        datas:{
            intervalTime:1e3 * 60 * 2,
            siteId:"erya_tsk",
            isAutoPlayNext:false,
            isAutoChgLine:false,
            currVideoInfo:info
        },
        skin:{
            style:{
                subtitle:{
                    fontSize:30
                }
            },
            text:{
                siteNameText:"尔雅",
                playLines:[ {
                    index:0,
                    name:"校园网"
                }, {
                    index:1,
                    name:"公网"
                } ]
            },
            img:{
                loadLogoImg:"/flash/logo/loading_logo.png",
                loadBgImg:"/flash/logo/loading_bg.png"
            },
            color:{
                themeColor:65280
            },
            view:{
                bottomPanel:{
                    bottons:{
                        playNextBtn:false,
                        playPrevBtn:false,
                        chgLineBtn:false,
                        playListBtn:true
                    }
                },
                rightPanel:{
                    bottons:{
                        shareBtn:false,
                        chgLineBtn:true,
                        downloadBtn:false
                    }
                },
                settingPanel:{
                    tabs:{
                        subtitleTab:true,
                        chgLineTab:false
                    }
                }
            }
        },
        events:{
            onInit:function(event, id) {},
            onNotVideoUrl:function(event, seriId, videoId, data) {},
            onGoPlay:onGoPlay,
            onPlayProgress:onPlaySecond,
            onTurnOff:onTurnOff,
            onEnd:onEnd,
            onSendProgressSuccess:onSendProgressSuccess,
            onUnlock:unlock,
            onFullScreen:function(event) {
                isDiu = true;
            }
        }
    };
    return config;
}