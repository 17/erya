if (jQuery) (function(jQuery) {
    jQuery.extend(jQuery.fn, {
        cxplayer:function(options) {
            return jQuery(this).each(function() {
                var opts = jQuery.extend(true, {
                    id:jQuery(this).attr("id"),
                    playerId:generateMixed(6),
                    width:900,
                    height:500,
                    player:"player.swf",
                    expressInstall:"expressInstall.swf",
                    provider:"default",
                    datas:{
                        pauseAdvertList:[],
                        preAdvertList:[],
                        preLoaderUrl:"",
                        isAutoPlayNext:true,
                        isDefaultPlay:true,
                        intervalTime:1e3,
                        isAutoChgLine:true,
                        minKbs:15,
                        minKbsLongTime:10,
                        cdnUrl:"http://cdn.chaoxing.com/cdnlist.html",
                        siteId:"",
                        currVideoInfo:{
                            videoId:"",
                            serieId:"",
                            seriNum:1,
                            title:"",
                            locked:false,
                            metaDataUrl:"",
                            getVideoUrl:"",
                            dftLineIndex:0,
                            subtitleUrl:"",
                            previewUrl:"",
                            viewPicUrl:"",
                            pointListUrl:"",
                            playListUrl:"",
                            relatListUrl:"",
                            resourceUrl:"",
                            prePictureUrl:""
                        }
                    },
                    skin:{
                        text:{
                            siteNameText:"",
                            playLines:[],
                            fastPlayList:[]
                        },
                        img:{
                            waterIconImg:"",
                            loadLogoImg:"",
                            loadAdvertImg:"",
                            loadBgImg:"",
                            bottomBgImg:"",
                            miniLogoImg:{},
                            shareIcons:[]
                        },
                        color:{
                            themeColor:16711680,
                            colors:{
                                bottomBgColor:false,
                                bottomPanelColor:false,
                                movieDragPanelColor:false,
                                rightPanelColor:false,
                                topPanelColor:false,
                                settingPanelColor:false,
                                bigPlayBtnColor:false,
                                bigRePlayBtnColor:false,
                                playListPanelColor:false
                            }
                        },
                        style:{
                            subtitle:{
                                fontSize:14,
                                fontFamily:"楷体",
                                fontColor:16777215,
                                strokeColor:0,
                                strokeSize:2,
                                textAlign:"center",
                                paddingBottom:10
                            },
                            resourcePanel:{
                                x:0,
                                y:0,
                                width:150,
                                height:100
                            }
                        },
                        view:{
                            bottomPanel:{
                                bottons:{
                                    playNextBtn:true,
                                    playPrevBtn:true,
                                    playListBtn:true,
                                    fastPlayBtn:false,
                                    chgLineBtn:false,
                                    lineListBtn:true,
                                    subtitleChgBtn:false,
                                    cutImgBtn:true,
                                    settingBtn:true,
                                    miniLogo:false
                                },
                                labels:{
                                    msgLabel:true,
                                    timeLabel:true
                                }
                            },
                            movieDragPanel:{
                                visiable:true,
                                bottons:{
                                    fastBackBtn:true,
                                    fastForBtn:true
                                },
                                bars:{
                                    progressBar:true
                                }
                            },
                            rightPanel:{
                                visiable:true,
                                bottons:{
                                    shareBtn:true,
                                    trunOffBtn:true,
                                    chgLineBtn:true,
                                    downloadBtn:true
                                },
                                customerButtons:[]
                            },
                            settingPanel:{
                                visiable:true,
                                tabs:{
                                    colorTab:true,
                                    screenTab:true,
                                    subtitleTab:true,
                                    chgLineTab:true
                                }
                            },
                            topPanel:{
                                visiable:true,
                                bottons:{
                                    fullScreenBtn:false,
                                    scale50Btn:true,
                                    scale75Btn:true,
                                    scale100Btn:true,
                                    coveredBtn:false
                                }
                            },
                            resourcePanel:{
                                visiable:true
                            }
                        }
                    },
                    events:{
                        onInit:function(event, id) {},
                        onDownload:function(event) {},
                        onNotVideoUrl:function(event, seriId, videoId, data) {},
                        onGoPlay:function(event, index, data, enc) {},
                        onShare:function(event, index, data) {},
                        onPlayProgress:function(event, proTime, proSize, data, enc) {},
                        onTurnOff:function(event, isOff) {},
                        onPointStart:function(event, data, enc) {},
                        onPointEnd:function(event, data, enc) {},
                        onStart:function(event, index, data) {},
                        onEnd:function(event, index, data, enc) {},
                        onUnlock:function(event, index, data) {},
                        onChangeLine:function(event, lineIndex) {},
                        onInitComplete:function(event) {},
                        onRightIconClick:function(event, data) {},
                        onError:function(event, data) {},
                        onMovieDrag:function(event, startTime, endTime, data) {},
                        onPlay:function(event, proTime) {},
                        onPause:function(event, proTime) {},
                        onAnswerRight:function(event, data) {},
                        onAnswerWrong:function(event, data) {},
                        onSendProgressSuccess:function(event, data) {},
                        onSendProgressError:function(event, data) {},
                        onFullScreen:function(event) {},
                        onNormalScreen:function(event) {}
                    }
                }, options);
                if (opts.skin.color.colors.settingPanelColor == false) {
                    opts.skin.color.colors.settingPanelColor = opts.skin.color.themeColor;
                }
                if (opts.skin.color.colors.bottomBgColor == false) {
                    opts.skin.color.colors.bottomBgColor = opts.skin.color.themeColor;
                }
                if (opts.skin.color.colors.bottomPanelColor == false) {
                    opts.skin.color.colors.bottomPanelColor = opts.skin.color.themeColor;
                }
                if (opts.skin.color.colors.movieDragPanelColor == false) {
                    opts.skin.color.colors.movieDragPanelColor = opts.skin.color.themeColor;
                }
                if (opts.skin.color.colors.topPanelColor == false) {
                    opts.skin.color.colors.topPanelColor = opts.skin.color.themeColor;
                }
                if (opts.skin.color.colors.bigPlayBtnColor == false) {
                    opts.skin.color.colors.bigPlayBtnColor = opts.skin.color.themeColor;
                }
                if (opts.skin.color.colors.bigRePlayBtnColor == false) {
                    opts.skin.color.colors.bigRePlayBtnColor = opts.skin.color.themeColor;
                }
                if (opts.skin.color.colors.rightPanelColor == false) {
                    opts.skin.color.colors.rightPanelColor = opts.skin.color.themeColor;
                }
                if (opts.skin.color.colors.playListPanelColor == false) {
                    opts.skin.color.colors.playListPanelColor = opts.skin.color.themeColor;
                }
                if (opts.skin.text.playLines == false) {
                    opts.skin.text.playLines = [ {
                        index:0,
                        name:"电信",
                        intro:""
                    }, {
                        index:1,
                        name:"联通",
                        intro:""
                    }, {
                        index:2,
                        name:"其他",
                        intro:""
                    } ];
                }
                jQuery(this).data("opts", opts);
                var player = jQuery('<div id="' + opts.playerId + '"></div>');
                if (opts.events.onInit() != false) {
                    var params = {
                        menu:"false",
                        scale:"noScale",
                        allowFullscreen:true,
                        allowScriptAccess:"always",
                        bgcolor:"#000000",
                        wmode:"transparent"
                    };
                    var flashvars = {
                        id:opts.id,
                        playerId:opts.playerId,
                        provider:opts.provider,
                        datas:encodeURIComponent(JSON.stringify(opts.datas)),
                        skin:encodeURIComponent(JSON.stringify(opts.skin))
                    };
                    jQuery(this).css({
                        height:opts.height,
                        width:opts.width
                    }).empty().append(jQuery("<div></div>").css({
                        backgroundColor:params.bgcolor,
                        width:"100%",
                        height:"100%"
                    }).append(player));
                    swfobject.embedSWF(opts.player, opts.playerId, "100%", "100%", "10.0.0", opts.expressInstall, flashvars, params, {
                        id:opts.playerId
                    });
                }
                jQuery(this).bind("onInitComplete", {
                    action:opts.events.onInitComplete
                }, function(event) {
                    if (event.data.action(event) !== false) {}
                });
                jQuery(this).bind("onPlayProgress", {
                    action:opts.events.onPlayProgress
                }, function(event, proTime, proSize, data, enc) {
                    if (event.data.action(event, proTime, proSize, data, enc) !== false) {}
                });
                jQuery(this).bind("onDownload", {
                    action:opts.events.onDownload
                }, function(event) {
                    var flag = event.data.action(event);
                    jQuery(this).getPlayer().downloadNext(flag);
                });
                jQuery(this).bind("onNotVideoUrl", {
                    action:opts.events.onNotVideoUrl
                }, function(event, seriId, videoId, data) {
                    if (event.data.action(event, seriId, videoId, data) !== false) {}
                });
                jQuery(this).bind("onGoPlay", {
                    action:opts.events.onGoPlay
                }, function(event, index, data, enc) {
                    if (event.data.action(event, index, data, enc) !== false) {}
                });
                jQuery(this).bind("onShare", {
                    action:opts.events.onShare
                }, function(event, index, data) {
                    if (event.data.action(event, index, data) !== false) {}
                });
                jQuery(this).bind("onTurnOff", {
                    action:opts.events.onTurnOff
                }, function(event, isOff) {
                    if (event.data.action(event, isOff) !== false) {}
                });
                jQuery(this).bind("onPointStart", {
                    action:opts.events.onPointStart
                }, function(event, data, enc) {
                    if (event.data.action(event, data, enc) !== false) {}
                });
                jQuery(this).bind("onPointEnd", {
                    action:opts.events.onPointEnd
                }, function(event, data, enc) {
                    if (event.data.action(event, data, enc) !== false) {}
                });
                jQuery(this).bind("onStart", {
                    action:opts.events.onStart
                }, function(event, index, data) {
                    if (event.data.action(event, index, data) !== false) {}
                });
                jQuery(this).bind("onEnd", {
                    action:opts.events.onEnd
                }, function(event, index, data, enc) {
                    if (event.data.action(event, index, data, enc) !== false) {}
                });
                jQuery(this).bind("onUnlock", {
                    action:opts.events.onUnlock
                }, function(event, data) {
                    if (event.data.action(event, data) !== false) {}
                });
                jQuery(this).bind("onChangeLine", {
                    action:opts.events.onChangeLine
                }, function(event, lineIndex) {
                    if (event.data.action(event, lineIndex) !== false) {}
                });
                jQuery(this).bind("onRightIconClick", {
                    action:opts.events.onRightIconClick
                }, function(event, data) {
                    if (event.data.action(event, data) !== false) {}
                });
                jQuery(this).bind("onError", {
                    action:opts.events.onError
                }, function(event, data) {
                    if (event.data.action(event, data) !== false) {}
                });
                jQuery(this).bind("onMovieDrag", {
                    action:opts.events.onMovieDrag
                }, function(event, startTime, endTime, data) {
                    if (event.data.action(event, startTime, endTime, data) !== false) {}
                });
                jQuery(this).bind("onPlay", {
                    action:opts.events.onPlay
                }, function(event, proTime) {
                    if (event.data.action(event, proTime) !== false) {}
                });
                jQuery(this).bind("onPause", {
                    action:opts.events.onPause
                }, function(event, proTime) {
                    if (event.data.action(event, proTime) !== false) {}
                });
                jQuery(this).bind("onAnswerRight", {
                    action:opts.events.onAnswerRight
                }, function(event, data) {
                    if (event.data.action(event, data) !== false) {}
                });
                jQuery(this).bind("onAnswerWrong", {
                    action:opts.events.onAnswerWrong
                }, function(event, data) {
                    if (event.data.action(event, data) !== false) {}
                });
                jQuery(this).bind("onSendProgressSuccess", {
                    action:opts.events.onSendProgressSuccess
                }, function(event, data) {
                    if (event.data.action(event, data) !== false) {}
                });
                jQuery(this).bind("onSendProgressError", {
                    action:opts.events.onSendProgressError
                }, function(event, data) {
                    if (event.data.action(event, data) !== false) {}
                });
                jQuery(this).bind("onFullScreen", {
                    action:opts.events.onFullScreen
                }, function(event) {
                    if (event.data.action(event) !== false) {}
                });
                jQuery(this).bind("onNormalScreen", {
                    action:opts.events.onNormalScreen
                }, function(event) {
                    if (event.data.action(event) !== false) {}
                });
            });
        },
        getInstance:function() {
            return jQuery(this).getPlayer();
        },
        getPlayer:function() {
            return document.getElementById(jQuery(this).data("opts").playerId);
        },
        playMovie:function() {
            jQuery(this).getPlayer().playMovie();
        },
        pauseMovie:function() {
            jQuery(this).getPlayer().pauseMovie();
        },
        goPlay:function(index, toTime) {
            jQuery(this).getPlayer().goPlay(index, toTime);
        },
        goPlayForUrls:function(videoUrls) {
            jQuery(this).getPlayer().goPlayForUrls(videoUrls);
        },
        fastFor:function(isFor) {
            jQuery(this).getPlayer().fastFor(isFor);
        },
        addVolNum:function(isAdd) {
            jQuery(this).getPlayer().addVolNum(isAdd);
        },
        setSubtitle:function(str) {
            jQuery(this).getPlayer().setSubtitle(str);
        },
        turnOff:function(isOff) {
            jQuery(this).getPlayer().turnOff(isOff);
        },
        getPlaySecond:function() {
            return jQuery(this).getPlayer().getPlaySecond();
        },
        getPlaySize:function() {
            return jQuery(this).getPlayer().getPlaySize();
        },
        getTotalSecond:function() {
            return jQuery(this).getPlayer().getTotalSecond();
        },
        getPlayList:function() {
            return jQuery(this).getPlayer().getPlayList();
        },
        reloadPlayList:function() {
            return jQuery(this).getPlayer().reloadPlayList();
        },
        refreshSkin:function(config) {
            return jQuery(this).getPlayer().refreshSkin(config);
        },
        getPlayState:function() {
            return jQuery(this).getPlayer().getPlayState();
        },
        sendProgress:function(url, param, enc) {
            return jQuery(this).getPlayer().sendProgress(url, param, enc);
        }
    });
})(jQuery);

function defaultSkin() {
    return "default";
}

var chars = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];

function generateMixed(n) {
    var res = "";
    for (var i = 0; i < n; i++) {
        var id = Math.ceil(Math.random() * (chars.length - 1));
        res += chars[id];
    }
    return res;
}