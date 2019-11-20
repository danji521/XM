$(function () {
        $(".theme_box li").each(function(i){
            $(".theme_box li").eq(i).stop().delay(i*300).animate({"opacity":"1"},800);
        })
})

// fancybox
$('.fancybox').fancybox();


/*video*/
(function(){
    $(" .video-img").click(function(){
        $("body").addClass("height");
        $(this).siblings(" .video-play").fadeIn(300);
        $(" .video-play video").trigger("play");
        $(" .box").height($(" .video-play video").height());
    });
    $(" .video-play .close").click(function(){
        $(" .video-play").hide();
        $(" .video-play video").load();
        $("body").removeClass("height");
        $(" .video-play .box .play").hide();
    });
    $(" .video-play video").click(function(){
        $(" .video-play video").trigger("pause");
        $(" .video-play .box .play").show();
    });
    $(" .video-play .box .play").click(function(){
        $(" .video-play video").trigger("play");
        $(this).hide();
    });
    
    $(window).resize(function(){
        $(" .box").height($(" .video-play video").height());
    });
})();