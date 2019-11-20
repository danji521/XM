$(function(){
    // if($(window).width() > 980){
    //     /**
    //      * 获取滚动条距离顶端的距离
    //      * @return {}支持IE6
    //      */
    //     function getScrollTop() {
    //         var scrollPos;
    //         if (window.pageYOffset) {
    //             scrollPos = window.pageYOffset;
    //         }
    //         else if (document.compatMode && document.compatMode != 'BackCompat')
    //         { scrollPos = document.documentElement.scrollTop; }
    //         else if (document.body) { scrollPos = document.body.scrollTop; }
    //         return scrollPos;
    //     }
    //     //判断滚动
    //     $(window).scroll(function () {
    //         var yheight = getScrollTop(); //滚动条距顶端的距离
    //         if (yheight > 180) {
    //             if (!$(".nav>div").hasClass("fixedlines")) {
    //                 $(".nav>div").addClass("fixedlines");
    //             }
    //         }
    //         else {
    //             if ($(".nav>div").hasClass("fixedlines"))
    //                 $(".nav>div").removeClass("fixedlines");
    //         }
    //     });
    //
    // }
    if($(window).width() < 980){
        $(".nav a.link").click(function(e){
            e.preventDefault();
            var _this = $(this)
            _this.siblings().stop().slideDown(400)
            _this.parent().siblings().find(".subnav").stop().slideUp(400)
        })
    }else{
        $(".nav li.link").hover(function(){
            $(this).find(".subnav").stop(true,true).slideDown(400)
            $(".nav-bg").stop(true,true).slideDown(400)
        }, function(){
            $(this).find(".subnav").stop(true,true).slideUp(400)
            $(".nav-bg").stop(true,true).slideUp(200)
        })
    }
    var nav=1;
    $(".ssubNav1").click(function(){
        if(nav==1){
            $("#navline_1").addClass("navline1");
            $("#navline_2").addClass("navline2");
            $("#navline_3").addClass("navline3");
            nav=0;
        }else{
            $("#navline_1").removeClass("navline1");
            $("#navline_2").removeClass("navline2");
            $("#navline_3").removeClass("navline3");
            nav=1;
        }
    })
    $(".ssubNav1").click(function(){
        $(".header .nav").slideToggle("fast");
    })
    $(".scroll").click(function(){
        $("html,body").animate({scrollTop:0},200);
    });


})


    // 等待所有加载
    $(window).load(function(){
        $('body').addClass('loaded');
        $('#loader-wrapper .load_title').remove();
    });


$(function () {
    var nav = $(".header"); //得到导航对象
    var win = $(window); //得到窗口对象
    var sc = $(document);//得到document文档对象。
    win.scroll(function () {
        if (sc.scrollTop() >= 20) {
            nav.addClass("fixednav");
            $(".header2").fadeIn();
        } else {
            nav.removeClass("fixednav");
            // $(".header").fadeOut();
        }
    })
})